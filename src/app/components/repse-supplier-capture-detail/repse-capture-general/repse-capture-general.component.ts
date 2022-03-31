import { CompileShallowModuleMetadata, IfStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import * as e from 'cors';
import { decode } from 'querystring';
import { supplierModel } from 'src/app/models/supplier.model';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { supplyservice } from '../../../services/supplier.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-repse-capture-general',
  templateUrl: './repse-capture-general.component.html',
  styleUrls: ['./repse-capture-general.component.css']
})
export class RepseCaptureGeneralComponent implements OnInit {

// =========================
// DECLARACIONES
// =========================
nombre : string;
direccion : string;
rfc : string;
contacto : string;
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
arrayDocumentosProveedor : any;

nombreArchivo: string = " (archivo nuevo) ";
loading: boolean;
valido: boolean
errorFileUpload : boolean = true; // true = valido, false = invalido

// Variables de carga de archivos
urlDireccion : any;
urlRFC : any;
urlActaConstitutiva : any;
urlINE : any;
urlAltaImss : any;
urlAltaInfonavit : any;
urlAltaSAT : any;
urlEstadoCuenta : any;
urlEstadoFinanciero : any;
urlContrato : any;
urlRPP : any;
urledoCtaBancario : any;

estadoDireccion : number = 0;
estadoRFC : any;
estadoActaConstitutiva : any;
estadoINE : any;
estadoAltaImss : any;
estadoAltaInfonavit : any;
estadoAltaSAT : any;
estadoEstadoCuenta : any;
estadoEstadoFinanciero : any;
estadoContrato : any;
estadoRPP : any;
estadoedoCtaBancario : any;
decodedSign : any;

public newProject: FormGroup;

  constructor(
    // public dialogRef: MatDialogRef<any>
    // , 
    private _supplyservice : supplyservice
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private readonly _uploadFileService: UploadFileService
  ) { 
    this.newProject = this.formBuilder.group({
      nombre :  new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      rfc: new FormControl('', [Validators.required]),
      contacto: new FormControl('', [Validators.required]),
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
      registroPatronalProv: new FormControl('', [Validators.required])
    });
  }

// =========================
// PROCEDIMIENTOS
// =========================

  ngOnInit(): void {
    
    this.decode();
    
    this.getDocumentsAll(0);

    this.tipoImagenFile = [{id : 101, categoria : 'direccion'}
    ,{id : 102, categoria : 'rfc'}
    ,{id : 103, categoria : 'actaConstitutiva'}
    ,{id : 104, categoria : 'ine'}
    ,{id : 105, categoria : 'imss'}
    ,{id : 106, categoria : 'altaInfonavit'}
    ,{id : 107, categoria : 'altaSAT'}
    ,{id : 108, categoria : 'edoCTA'}
    ,{id : 109, categoria : 'edoFinanciero'}
    ,{id : 110, categoria : 'contrato'}
    ,{id : 111, categoria : 'RegPatProveedor'}  
    ]

  }
  
  cancel(event){
  //  this.dialogRef.close();
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

  addFile(concepto: any, event){
    console.log('SE CARGA', concepto);
  }

  addView(concepto: any, event ){
    console.log('VISUALIZA', concepto);
  }

  onFileChange(event, grupoArchivo: string, tipoArchivo : string){
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    let extencionArchivo : string = '';
    let fileToUpload : any;
    
    // this.UploadSavingsDataExcel = null;

    if (target.files.length !== 1) {
      throw new Error('No se pueden seleccionar multiples archivos');
    }

    this.nombreArchivo = (target.files.length > 0) ? target.files[0]["name"].substring(1,30) : " (archivo nuevo) ";

    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    extencionArchivo = target.files[0].name.substring(target.files[0].name.length - 5,target.files[0].name.length)

    console.log('subimos un archivo tipo', this.nombreArchivo);

    this.UploadFiles(target.files[0], '1', tipoArchivo)
    // this.cargarImagen(event);

    // fileToUpload = form.identificacion ? await this.UploadFiles(form.identificacion[0], form.email, form.placas, form.plataforma) : this.userInfo.identificacionOficial;
    // this.errorUpdIdentificacionOficial = (this.errorFileUpload == false) ? false : true;

  }

// =========================
// UTILERIAS
// =========================
async UploadFiles(file: File, idProveedor: string, tipoArchivo: string) {

  if ((file.name.substring(file.name.length - 4, file.name.length).toUpperCase() == '.PNG')
      || (file.name.substring(file.name.length - 4, file.name.length).toUpperCase() == '.BMP')
      || (file.name.substring(file.name.length - 4, file.name.length).toUpperCase() == '.JPG')) {
  }
  else {
      this.valido = false;
      this.openSnackBar("Alguno de los archivos seleccionados no es una imagen, seleccionar un arhivo válido", 'error');
      this.loading = false;
      return;
  }

  const formData = new FormData();

  formData.append('File', file, file.name);
  formData.append('idProveedor', idProveedor);
  formData.append('tipoArchivo', tipoArchivo);



  let result;

  // /let resp = await this._uploadFileService.postUploadFile(formData).toPromise()
  // return resp;
  try {
      this.errorFileUpload = true; // valido
      console.log('FORM DATA', formData);
      return await this._uploadFileService.postUploadFile(formData);
  } catch (error) {
      this.openSnackBar('El archivo no pudo ser cargado', 'error');
      this.errorFileUpload = false; // invalido
      this.loading = false;
      throw new Error
  }
}

openFile(documentShow : number){
  this.getDocumentsAll(documentShow);
  // window.open(this.urlDireccion);
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

  console.log("proveedor buscado", this.ProveedorId);
}

// =========================
// SERVICIOS
// =========================
imagenes: any[] = [];
  cargarImagen(event: any, tipoImagen : string, grupoImagen : string) {
    let archivos = event.target.files;
    let nombre = event.target.files.name;
    let arrayToDb : any;
    let arrayCategoriaFiltrado : any;

    for (let i = 0; i < archivos.length; i++) {

      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.imagenes.push(reader.result);
        this._uploadFileService.subirImagen(tipoImagen + '_' + event.target.files[0]["name"], reader.result, grupoImagen, this.ProveedorId, 2022, 1).then(urlImagen => {
          // let usuario = {
          //   name: "jonathan",
          //   nickName: "yonykikok",
          //   password: "401325",
          //   imgProfile: urlImagen
          // }

          console.warn('urlImagen', tipoImagen);
          console.warn('this.tipoImagenFile', this.tipoImagenFile);

          let arrayCategoriaFiltrado = this.tipoImagenFile.filter(e => e.categoria == tipoImagen);

          arrayToDb = {
                        idDocumento : 0, 
                        idProveedor : this.ProveedorId
                        , categoriaDocumento : arrayCategoriaFiltrado[0]["id"]
                        , urlDocumento : urlImagen.toString()
                        , anno : 2022
                        , mes : 1
                        , estado : 0};

                        console.log('arreglo a subir', arrayToDb);

          this._uploadFileService.postUploadDocumentsToDb(arrayToDb).subscribe(
            res=> {
              console.log('DOCUMENTOS', res);
            },
            error => console.log("error al actualizar proveedores",error)
          );

          switch (tipoImagen){
            case('direccion'): this.urlDireccion = urlImagen.toString();
              break;
            case('rfc') : this.urlRFC = urlImagen.toString();
              break;
            case ('actaConstitutiva') : this.urlActaConstitutiva = urlImagen.toString();
              break;
            case ('ine') : this.urlINE = urlImagen.toString();
              break;
            case ('imss') : this.urlAltaImss = urlImagen.toString();
              break;
            case ('altaInfonavit') : this.urlAltaInfonavit = urlImagen.toString();
              break;
            case ('altaSAT') : this.urlAltaSAT = urlImagen.toString();
              break;
            case ('edoCta') : this.urlEstadoCuenta = urlImagen.toString();
              break;
            case ('edoFinanciero') : this.urlEstadoFinanciero = urlImagen.toString();
              break;
            case ('contrato') : this.urlContrato = urlImagen.toString();
              break;
            case ('RegPatProveedor') : this.urlRPP = urlImagen.toString();
              break;
          }

          console.log('direccion', this.urlDireccion);
          
          this.openSnackBar('Se cargo exitosamente el archivo', '');

          // guarda en base de datos
          // arrayToDb.push({id : 1, })
          // this.insertFilesToDb(arrayToDb);

        });
      }
    }
  }

  insertFilesToDb(arrayToDb : any){
    // Inserta Archivos en base de datos
    this._supplyservice.postDocument(arrayToDb).subscribe(
      res=> {
        console.log('PROVEEDORES', res);
        this.openSnackBar('El registro se actualizó con éxito', '');  
      },
      error => console.log("error al insertar proveedores",error)
    )
  }

  getDocumentsAll(documentShow : number){
    let arrayDocumentos : any
    this._uploadFileService.getdocumentsAll().subscribe(
      res=> {
        console.log('Documentos', res);

        arrayDocumentos = res;
        if(documentShow == 0)
          this.arrayDocumentosProveedor = arrayDocumentos.filter(e => e.idProveedor == this.ProveedorId)
        else
          this.arrayDocumentosProveedor = arrayDocumentos.filter(e => e.idProveedor == this.ProveedorId && e.categoriaDocumento == documentShow)

        if(documentShow == 0){
          this.arrayDocumentosProveedor.forEach(element => {
            switch(element.categoriaDocumento){
              case(101): this.estadoDireccion = element.estado; break;
              case(102): this.estadoRFC = element.estado; break;
              case(103): this.estadoActaConstitutiva = element.estado; break;
              case(104): this.estadoINE = element.estado; break;
              case(105): this.estadoAltaImss = element.estado; break;
              case(106): this.estadoAltaInfonavit = element.estado; break;
              case(107): this.estadoAltaSAT = element.estado; break;
              case(108): this.estadoEstadoCuenta = element.estado; break;
              case(109): this.estadoEstadoFinanciero = element.estado; break;
              case(110): this.estadoContrato = element.estado; break;
              case(111): this.estadoRPP = element.estado; break;
            }
          });
        }

        console.log('dfdfdf', this.arrayDocumentosProveedor)

        if(documentShow != 0){
          if(this.arrayDocumentosProveedor != undefined && this.arrayDocumentosProveedor.length > 0)
            window.open(this.arrayDocumentosProveedor[0]["urlDocumento"]);
          else
            this.openSnackBar('Documento no encontrado', '');
        }

      },
      error => console.log("error consulta regiones",error)
    )
  }

}
