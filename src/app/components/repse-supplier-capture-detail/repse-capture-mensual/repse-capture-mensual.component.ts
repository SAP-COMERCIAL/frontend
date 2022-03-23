import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';

@Component({
  selector: 'app-repse-capture-mensual',
  templateUrl: './repse-capture-mensual.component.html',
  styleUrls: ['./repse-capture-mensual.component.css']
})
export class RepseCaptureMensualComponent implements OnInit {

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
urlListadoTrabajadores : any;
urlCFDI : any;
urlComprobanteBanco : any;
urlSIPARE : any;
urlSUA : any;
urlISRComprobanteBanco : any;
urlISRDeclaracion : any;
urlIVADeclaracion : any;
urlOpinionPositivaIMSS : any;
urlOpinionPositivaSAT : any;

public newProject: FormGroup;

  constructor(
    private _supplyservice : supplyservice
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private readonly _uploadFileService: UploadFileService
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

  cancel(event){
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

          switch (tipoImagen){
            case('listadoTabajadores'): this.urlListadoTrabajadores = urlImagen.toString();
              break;
            case ('CFDI') : this.urlCFDI = urlImagen.toString();
              break;
            case ('comprobanteBanco') : this.urlComprobanteBanco = urlImagen.toString();
              break;
            case ('SIPARE') : this.urlSIPARE = urlImagen.toString();
              break;
            case ('SUA') : this.urlSUA = urlImagen.toString();
              break;
            case ('ISRComprobanteBanco') : this.urlISRComprobanteBanco = urlImagen.toString();
              break;
            case ('ISRDeclaracion') : this.urlISRDeclaracion = urlImagen.toString();
              break;
            case ('IVADeclaracion') : this.urlIVADeclaracion = urlImagen.toString();
              break;
            case ('opinionPositivaIMSS') : this.urlOpinionPositivaIMSS = urlImagen.toString();
              break;
            case ('pinionPositivaSAT') : this.urlOpinionPositivaSAT = urlImagen.toString();
              break;
          }

          console.log('direccion', this.urlListadoTrabajadores);
          
          this.openSnackBar('Se cargo exitosamente el archivo', '');

          // guarda en base de datos
          // arrayToDb.push({id : 1, })
          // this.insertFilesToDb(arrayToDb);

        });
      }
    }
  }

}
