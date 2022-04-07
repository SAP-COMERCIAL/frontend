import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';
import * as e from 'cors';

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
ProveedorId : number = 0;
usuarioId : number = 0;
tipoImagenFile : any = [];
arrayDocumentosProveedorOrigen : any;
decodedSign : any;
anioBandera : number = 0;
mesBandera : number = 0;

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
urlIVAComprobanteBanco : any;

// Maneja estados en la pantalla
estadoListadoTrabajadores : any;
estadoCFDI : any;
estadoComprobanteBanco : any;
estadoSIPARE : any;
estadoSUA : any;
estadoISRComprobanteBanco : any;
estadoISRDeclaracion : any;
estadoIVADeclaracion : any;
estadoOpinionPositivaIMSS : any;
estadoOpinionPositivaSAT : any;
estadoIVAComprobanteBanco : any;

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
    
  this.decode();

    this.tipoImagenFile = [
      {id : 201, categoria : 'listadoTabajadores'}
    ,{id : 202, categoria : 'CFDI'}
    ,{id : 203, categoria : 'comprobanteBanco'}
    ,{id : 204, categoria : 'SIPARE'}
    ,{id : 205, categoria : 'SUA'}
    ,{id : 206, categoria : 'ISRComprobanteBanco'}
    ,{id : 207, categoria : 'ISRDeclaracion'}
    ,{id : 208, categoria : 'IVADeclaracion'}
    ,{id : 209, categoria : 'IVAComprobanteBanco'}
    ,{id : 210, categoria : 'opinionPositivaIMSS'}
    ,{id : 211, categoria : 'opinionPositivaSAT'}
    ]

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

  search(form, event){
    this.getsupplierDocuments();
  }

  opencomments(documentShow : number, element, event){

    let arrayDocuemtnoEnviar : any;

    arrayDocuemtnoEnviar = this.arrayDocumentosProveedorOrigen.filter(e => e.idProveedor == this.ProveedorId 
                                                                    && e.categoriaDocumento == documentShow
                                                                    && e.anno == this.newProject.controls["anio"].value 
                                                                    && e.mes == this.newProject.controls["mes"].value);

    this.showMessage(1, 'Comentario', 'info', arrayDocuemtnoEnviar[0]["comentarios"], 'Cerrar');

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

decode(){
  let token = localStorage.getItem('token_access');
  let decodeUser = jwt_decode(token)["usuario"];
  let decodeProveedorId = jwt_decode(token)["proveedor_id"];
  this.usuarioId = decodeUser;
  this.ProveedorId = decodeProveedorId
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

          let arrayCategoriaFiltrado = this.tipoImagenFile.filter(e => e.categoria == tipoImagen);

          arrayToDb = {
            idDocumento : 0, 
            idProveedor : this.ProveedorId
            , categoriaDocumento : arrayCategoriaFiltrado[0]["id"]
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
            case ('IVAComprobanteBanco') : this.urlIVAComprobanteBanco = urlImagen.toString();
              break;
            case ('opinionPositivaIMSS') : this.urlOpinionPositivaIMSS = urlImagen.toString();
              break;
            case ('opinionPositivaSAT') : this.urlOpinionPositivaSAT = urlImagen.toString();
              break;
          }

          console.log('direccion', this.urlListadoTrabajadores);
          
          this.openSnackBar('Se cargo exitosamente el archivo', '');

        });
      }
    }
  }

  getsupplierDocuments(){

    let arrayDocumentos : any;
    let arrayDocumentosFiltrados : any;
    let anio : number = 0;
    let mes : number = 0;
                    
    this._uploadFileService.getdocumentsAll().subscribe(
      res=> {
        console.log('Documentos obtenidos', res);

        arrayDocumentos = res;

        if(this.newProject.controls["anio"].value != ''){
          anio = this.newProject.controls["anio"].value;
          mes = this.newProject.controls["mes"].value;
          this.anioBandera = anio;
          this.mesBandera = mes;
        }else{
          return;
        }

        arrayDocumentosFiltrados = null;
        arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.ProveedorId && e.categoriaDocumento > 200 && e.categoriaDocumento < 300 && e.anno == anio && e.mes == mes);

        this.showDocument(arrayDocumentosFiltrados, 201, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 202, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 203, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 204, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 205, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 206, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 207, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 208, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 209, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 210, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 211, anio, mes);

        this.arrayDocumentosProveedorOrigen = arrayDocumentosFiltrados;

      },
      error => console.log("error consulta regiones",error)
    )

  }

  showDocument(arrayDocumentosFiltrados : any, categoriaDocumento : number, anio: number, mes: number){
    let arraySupplier: any[] = [];
    let arrayDocumentos : any;
    let arrayDocumentoPorProveedor : any;
    let urlShow : any = '';
    let estadoShow : number = 3;
    let idDocumentShow : number = 0;
  
    urlShow = '';
    estadoShow = 4;
    idDocumentShow = 0;
    arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == categoriaDocumento)
    if(arrayDocumentoPorProveedor != undefined){ 
      urlShow = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '';
      estadoShow = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
      idDocumentShow = (arrayDocumentoPorProveedor.idDocumento != undefined) ? arrayDocumentoPorProveedor.idDocumento : 0;
    }
    
    switch(categoriaDocumento){
      case(201): this.estadoListadoTrabajadores = estadoShow; break;
      case(202): this.estadoCFDI = estadoShow; break;
      case(203): this.estadoComprobanteBanco = estadoShow; break;
      case(204): this.estadoSIPARE = estadoShow; break;
      case(205): this.estadoSUA = estadoShow; break;
      case(206): this.estadoISRComprobanteBanco = estadoShow; break;
      case(207): this.estadoISRDeclaracion = estadoShow; break;
      case(208): this.estadoIVADeclaracion = estadoShow; break;
      case(209): this.estadoIVAComprobanteBanco = estadoShow; break;
      case(210): this.estadoOpinionPositivaIMSS = estadoShow; break;
      case(211): this.estadoOpinionPositivaSAT = estadoShow; break;
    }

  }


}
