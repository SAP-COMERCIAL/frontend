import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { supplierModel } from 'src/app/models/supplier.model';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { supplyservice } from '../../../services/supplier.service';
import jwt_decode from "jwt-decode";

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
tipoImagenFile : any = [];
ProveedorId : number = 0;
usuarioId : number = 0;
anioBandera : number = 0;
mesBandera : number = 0;

// Variables de carga de archivos
urlOrdenCompraCCM : any;
urlAvanceDeObraCCM : any;
urlFacturaDePagoCCM : any;
urlComprobanteDePagoCCM : any;

estadoOrdenCompraCCM : any;
estadoAvanceDeObraCCM : any;
estadoFacturaDePagoCCM : any;
estadoComprobanteDePagoCCM : any;

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
    this.decode();

    this.tipoImagenFile = [
      {id : 501, categoria : 'ordenCompraCCM'}
    ,{id : 502, categoria : 'avanceDeObraCCM'}
    ,{id : 503, categoria : 'facturaDePagoCCM'}
    ,{id : 504, categoria : 'comprobanteDePagoCCM'}
    ]
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

search(form, event){
  this.getsupplierDocuments();
}

decode(){
  let token = localStorage.getItem('token_access');
  let decodeUser = jwt_decode(token)["usuario"];
  let decodeProveedorId = jwt_decode(token)["proveedor_id"];
  this.usuarioId = decodeUser;
  this.ProveedorId = decodeProveedorId
}

// =========================
// SERVICIOS
// =========================
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
      arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.ProveedorId && e.categoriaDocumento > 500 && e.categoriaDocumento < 600 && e.anno == anio && e.mes == mes);

      this.showDocument(arrayDocumentosFiltrados, 501, anio, mes);
      this.showDocument(arrayDocumentosFiltrados, 502, anio, mes);
      this.showDocument(arrayDocumentosFiltrados, 503, anio, mes);
      this.showDocument(arrayDocumentosFiltrados, 504, anio, mes);
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
    case(501): this.estadoOrdenCompraCCM = estadoShow; break;
    case(502): this.estadoAvanceDeObraCCM = estadoShow; break;
    case(503): this.estadoFacturaDePagoCCM = estadoShow; break;
    case(504): this.estadoComprobanteDePagoCCM = estadoShow; break;
  }

}

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
