import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { supplierModel } from 'src/app/models/supplier.model';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { supplyservice } from '../../../services/supplier.service';

@Component({
  selector: 'app-repse-capture-papeleria-ccm',
  templateUrl: './repse-capture-papeleria-ccm.component.html',
  styleUrls: ['./repse-capture-papeleria-ccm.component.css']
})
export class RepseCapturePapeleriaCCMComponent implements OnInit {
// =========================
// DECLARACIONES
// =========================

ciudad : string;
estado : string;
objetivoSocial : string;
tipoPersona : string;
telefono : string;
email : string;
actaConstitutiva : string;
ine : string;
altaIMSS : string;
altaINFONAVIT : string;
altaSAT : string;
edoCtaBancario : string;
edoFinanciero : string;
contrato : string;
registroPatronalProv : string;
ProveedorId : number = 1;

// Variables de carga de archivos
urlOrdenCompraCCM : any;
urlAvanceDeObraCCM : any;
urlFacturaDePagoCCM : any;
urlComprobanteDePagoCCM : any;

public newProject: FormGroup;

constructor(
  private _supplyservice : supplyservice
  , private formBuilder: FormBuilder
  , private readonly _uploadFileService: UploadFileService
  , private _snackBar : MatSnackBar
) { 
  this.newProject = this.formBuilder.group({
    anio: new FormControl('', [Validators.required]),
    mes: new FormControl('', [Validators.required])
  });
}

// =========================
// PROCEDIMIENTOS
// =========================

  ngOnInit(): void {
  }

  save(form, event){

    // let arrayToDb : any;

    // arrayToDb = ({ 
    //   proveedorid : 0
    //     , nombre : form.controls["nombre"].value
    //     , direccion : form.controls["direccion"].value
    //     , rfc : form.controls["rfc"].value 
    //     , ciudad : form.controls["ciudad"].value
    //     , estado : form.controls["estado"].value
    //     , contacto : form.controls["contacto"].value
    //     // , vigencia : '2050-01-01'
    //   });

    // this.insertSupplier(arrayToDb);
    
  }

// =========================
// UTILERIAS
// =========================
openFile(url){
  console.log('url', url);
  window.open(url);
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
}

// =========================
// SERVICIOS
// =========================
imagenes: any[] = [];
  cargarImagen(form, event: any, tipoImagen : string, grupoImagen : string) {
    let archivos = event.target.files;
    let nombre = event.target.files.name;
    let arrayToDb : any = [];
    
    for (let i = 0; i < archivos.length; i++) {

      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.imagenes.push(reader.result);
        this._uploadFileService.subirImagen(tipoImagen + '_' + event.target.files[0]["name"], reader.result, grupoImagen, this.ProveedorId, form.controls["anio"].value, form.controls["mes"].value).then(urlImagen => {
          // let usuario = {
          //   name: "jonathan",
          //   nickName: "yonykikok",
          //   password: "401325",
          //   imgProfile: urlImagen
          // }
          console.log(urlImagen);

          arrayToDb = {
            idDocumento : 0, 
            idProveedor : this.ProveedorId
            , categoriaDocumento : 2
            , urlDocumento : urlImagen.toString()
            , anno : this.newProject.controls["anio"].value
            , mes : this.newProject.controls["mes"].value
            , estado : 0};

            console.log('arreglo a subir', arrayToDb);

          this._uploadFileService.postUploadDocumentsToDb(arrayToDb).subscribe(
            res=> {
              console.log('DOCUMENTOS', res);
            },
            error => console.log("error al actualizar proveedores",error)
          );

          switch (tipoImagen){
            case('ordenCompraCCM'): this.urlOrdenCompraCCM = urlImagen.toString();
              break;
            case ('avanceDeObraCCM') : this.urlAvanceDeObraCCM = urlImagen.toString();
              break;
            case ('facturaDePagoCCM') : this.urlFacturaDePagoCCM = urlImagen.toString();
              break;
            case ('comprobanteDePagoCCM') : this.urlComprobanteDePagoCCM = urlImagen.toString();
              break;
          }

          console.log('direccion', this.urlOrdenCompraCCM);
          
          this.openSnackBar('Se cargo exitosamente el archivo', '');

        });
      }
    }
  }
}
