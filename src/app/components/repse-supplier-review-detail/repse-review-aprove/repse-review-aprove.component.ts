import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
// import { supplyservice } from '../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-repse-review-aprove',
  templateUrl: './repse-review-aprove.component.html',
  styleUrls: ['./repse-review-aprove.component.css']
})
export class RepseReviewAproveComponent implements OnInit {
  
// =========================
// DECLARACIONES
// =========================
nombre : string;
direccion : string;
rfc : string;
contacto : string;
ciudad : string;
estado : string;
supplierDataSource: any;

projectInfo : any;
estadoPantalla : string;

public newProject: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<supplierModel>
    , private formBuilder: FormBuilder
    , @Inject(MAT_DIALOG_DATA) public data
    , private _snackBar : MatSnackBar
    , private readonly _uploadFileService: UploadFileService
      ) {
      
        this.projectInfo = data.arrayData;

    this.newProject = this.formBuilder.group({
      comentarios : new FormControl('', [Validators.required]),
  });
  }

  ngOnInit(): void {
    
  }

  aprove(event){
    let arrayToDb : any;

    arrayToDb = ({idDocumento: this.projectInfo.idDocumento
                  , estado: 1
                  , comentarios: '' })

    this.aproveRejectDocument(arrayToDb);
    // this.openSnackBar('Documento aprobado', '');
    this.showMessage(2, 'Comentario', 'success', 'Documento aprobado', 'Cerrar');
    this.dialogRef.close();
  }

  deny(event){
    let arrayToDb : any;

    arrayToDb = ({idDocumento: this.projectInfo.idDocumento
                , estado: 2
               , comentarios: this.newProject.controls["comentarios"].value })

               console.log('aqui va el arreglo', arrayToDb)

    this.aproveRejectDocument(arrayToDb);
    // this.openSnackBar('Documento rechazado', '');
    this.showMessage(2, 'Comentario', 'success', 'Documento rechazado', 'Cerrar');
    this.dialogRef.close();
  }

  cancel(event){
    this.dialogRef.close();
  }

  // =========================
  // UTILERIAS
  // =========================
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
  }

  showMessage(tipoMensaje : number, header: string, icon: any, message : string, buttonCaption: string){
  
    switch(tipoMensaje){
      case(1) : 
          Swal.fire({
            title: header,
            html: '<p style="text-transform: capitalize;"></p>' + '<p><b>' + message + '</b></p>' + '<p style="text-transform: capitalize;"></p>',
            icon: icon,
            confirmButtonText: buttonCaption,
            customClass: {
                confirmButton: 'btn  btn-rounded btn-outline-warning'
            }
          })
        break;
      case(2) :
          Swal.fire({
            position: 'top-end',
            icon: icon,
            title: message,
            showConfirmButton: false,
            timer: 1500
          })
        break;
    }
  }

  // =========================
  // SERVICIOS
  // =========================
  aproveRejectDocument(arrayToDb : any){
    // Inserta Archivos en base de datos
    this._uploadFileService.postDocumentosAprobarRechazar(arrayToDb).subscribe(
      res=> {
        console.log('APROBAR DOCUMENTO', res);
        // this.openSnackBar('El registro se aprobó con éxito', '');  
      },
      error => console.log("error al aprobar el ocumento",error)
    )
  }

}
