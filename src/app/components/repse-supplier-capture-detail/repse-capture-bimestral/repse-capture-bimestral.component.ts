import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-repse-capture-bimestral',
  templateUrl: './repse-capture-bimestral.component.html',
  styleUrls: ['./repse-capture-bimestral.component.css']
})
export class RepseCaptureBimestralComponent implements OnInit {

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
decodedSign : any;
anioBandera : number = 0;
mesBandera : number = 0;

urlBiComprobantePagoBanco : any;
urlBiSIPARE : any;
urlBiSUA : any;
urlBiOpinionPositivaINFONAVIT : any;

estadoBiComprobantePagoBanco : any;
estadoBiSIPARE : any;
estadoBiSUA : any;
estadoBiOpinionPositivaINFONAVIT : any;

public newProject: FormGroup;

  constructor(
    private _supplyservice : supplyservice
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private readonly _uploadFileService: UploadFileService
  ) { 
    this.newProject = this.formBuilder.group({
      ciudad: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      objetivoSocial: new FormControl('', [Validators.required]),
      tipoPersona: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      actaConstitutiva: new FormControl('', [Validators.required]),
      ine: new FormControl('', [Validators.required]),
      altaIMSS: new FormControl('', [Validators.required]),
      altaINFONAVIT: new FormControl('', [Validators.required]),
      altaSAT: new FormControl('', [Validators.required]),
      edoCtaBancario: new FormControl('', [Validators.required]),
      edoFinanciero: new FormControl('', [Validators.required]),
      contrato: new FormControl('', [Validators.required]),
      registroPatronalProv: new FormControl('', [Validators.required]),
      mes: new FormControl('', [Validators.required]),
      anio: new FormControl('', [Validators.required])
    });
  }

// =========================
// PROCEDIMIENTOS
// =========================

  ngOnInit(): void {
    this.decode();

    this.tipoImagenFile = [
      {id : 301, categoria : 'biComprobanteDePagoBanco'}
    ,{id : 302, categoria : 'biSIPARE'}
    ,{id : 303, categoria : 'biSUA'}
    ,{id : 304, categoria : 'biopinionPositivaINFONAVIT'}
    ]
  }
  
  cancel(event){
  }

  search(form, event){
    this.getsupplierDocuments();
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
            case('biComprobanteDePagoBanco'): this.urlBiComprobantePagoBanco = urlImagen.toString();
              break;
            case ('biSIPARE') : this.urlBiSIPARE = urlImagen.toString();
              break;
            case ('biSUA') : this.urlBiSUA = urlImagen.toString();
              break;
            case ('biopinionPositivaINFONAVIT') : this.urlBiOpinionPositivaINFONAVIT = urlImagen.toString();
              break;
          }

          console.log('direccion', this.urlBiOpinionPositivaINFONAVIT);
          
          this.openSnackBar('Se cargo exitosamente el archivo', '');

          // guarda en base de datos
          // arrayToDb.push({id : 1, })
          // this.insertFilesToDb(arrayToDb);

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
        arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.ProveedorId && e.categoriaDocumento > 300 && e.categoriaDocumento < 400 && e.anno == anio && e.mes == mes);

        this.showDocument(arrayDocumentosFiltrados, 301, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 302, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 303, anio, mes);
        this.showDocument(arrayDocumentosFiltrados, 304, anio, mes);
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
      case(301): this.estadoBiComprobantePagoBanco = estadoShow; break;
      case(302): this.estadoBiSIPARE = estadoShow; break;
      case(303): this.estadoBiSUA = estadoShow; break;
      case(304): this.estadoBiOpinionPositivaINFONAVIT = estadoShow; break;
    }

  }
  
}
