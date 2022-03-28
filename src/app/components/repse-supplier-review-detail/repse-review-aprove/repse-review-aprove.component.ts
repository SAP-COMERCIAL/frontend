import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
// import { supplyservice } from '../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';

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
                  , estado: 1 })

    this.aproveRejectDocument(arrayToDb);
    this.openSnackBar('Documento aprobado', '');
    this.dialogRef.close();
  }

  deny(event){
    let arrayToDb : any;

    arrayToDb = ({idDocumento: this.projectInfo.idDocumento
                , estado: 2 })

    this.aproveRejectDocument(arrayToDb);
    this.openSnackBar('Documento rechazado', '');
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

  // =========================
  // SERVICIOS
  // =========================
  aproveRejectDocument(arrayToDb : any){
    // Inserta Archivos en base de datos
    this._uploadFileService.postDocumentosAprobarRechazar(arrayToDb).subscribe(
      res=> {
        console.log('APROBAR DOCUMENTO', res);
        this.openSnackBar('El registro se aprobó con éxito', '');  
      },
      error => console.log("error al aprobar el ocumento",error)
    )
  }

}
