import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { RepseSupplierReviewDetailComponent } from '../../../components/repse-supplier-review-detail/repse-supplier-review-detail.component';
import { ThrowStmt } from '@angular/compiler';
import { RepseReviewAproveComponent } from '../repse-review-aprove/repse-review-aprove.component';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { FormBuilder, FormGroup } from '@angular/forms';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';
import * as firebase from 'firebase/compat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repse-review-general',
  templateUrl: './repse-review-general.component.html',
  styleUrls: ['./repse-review-general.component.css']
})
export class RepseReviewGeneralComponent implements OnInit {

// =================
// DECLARACIONES
// =================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<supplierModel>
pageInfo : any;
providerId : number;
arraySupplierGlobal : any = [];
dataSourceSupplier : any;
usuarioId : string;
downloadURL : any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['supplier_id', 'documento', 'estatus', 'ver', 'revision', 'descarga'];

  public newForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<supplierModel>
    , public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice
    , private _UploadFileService : UploadFileService
    , private http: HttpClient
    , @Inject(MAT_DIALOG_DATA) public data
    , private formBuilder: FormBuilder) { 

      this.pageInfo = data.arrayData;
      // this.providerId = data.estadoPantalla;

      this.newForm = this.formBuilder.group({
        
      })

    }

  // =================
  // PROCEDIMIENTOS
  // =================

  ngOnInit(): void {
    this.decode();
    this.providerId = this.pageInfo.proveedorid;
    this.getsupplierDocuments();
  }
  descargarExcel(){
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({
                              nombre : element.nombre
                              , direccion : element.direccion
                              , RFC : element.rfc
                              , estatus : element.estado
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proveedores');  
  }

  review(element, event){
    // AUTORIZA O RECHAZA
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'APROBAR/DENEGAR ARCHIVO',
      arrayData : element,
      proveedorId: element.proveedorId,
      idDocumento: element.idDocumento,
      estadoPantalla: 'Edit'
     
    }
    
    dialogConfig.width = '550px';
    dialogConfig.height = '300px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(RepseReviewAproveComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
      this.getsupplierDocuments();
    });
  }

  reactive(element, event){
    let arrayToDb : any;
    console.log('reactivacion', element);

    arrayToDb = ({idDocumento: element.idDocumento
                , estado: 0
               , comentarios: '' })

               console.log('aqui va el arreglo', arrayToDb)

    this.aproveRejectDocument(arrayToDb);
  }

  filtrar(event : Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
  }

  save(event){

  }

  cancel(event){
    this.dialogRef.close();
  }

  descargarArchivos(){
  
    let posicion : number;
    let posicionInicial : number;

    this.fileDownload = ''
    this.dataSourceShow.filteredData.forEach(element => {

      let binaryData : any = []
      let dataType = 'png';
      let fileName = 'Nombre'
      let fileNameCompleto : string;
      let filePath : string;

      if(element.url != ''){

        posicionInicial = element.url.indexOf("6%2")
        posicion = element.url.indexOf("?")

        console.log('posicion', posicionInicial)
        console.log('posicion', posicion)

        fileNameCompleto = element.url.substring(posicion, posicionInicial + 3)
        dataType = fileNameCompleto.substring(fileNameCompleto.indexOf(".") + 1, fileNameCompleto.length)
        fileName = fileNameCompleto.substring(0, fileNameCompleto.indexOf("."))

        // DESCARGAR ARCHIVO
        // ==================
        binaryData.push(element.url)
        console.log('binario FILE PATH', binaryData);
        filePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        console.log('binario', filePath);
        
        let downloadLink = document.createElement('a');
        downloadLink.href = filePath;
        downloadLink.setAttribute('download', fileNameCompleto);
        downloadLink.setAttribute('src', fileNameCompleto);
        document.body.appendChild(downloadLink);
        console.log('doc', downloadLink)
        downloadLink.click();

        // this.download(element.url);

        
        // ==================
        // TERMINA DESCARGA


        
        // window.open(element.url);

        console.log('AQUI ESTA LA DESCARGA', element.url);
      }
    
    });

  }

  // download(url: string): Observable<Blob> {
  //   return this.http.get(url, {
  //     responseType: 'blob'
  //   })
  // }

    

  decode(){
    let token = localStorage.getItem('token_access');
    let decodeUser = jwt_decode(token)["usuario"];
    // let decodeProveedorId = jwt_decode(token)["proveedor_id"];
    this.usuarioId = decodeUser;
    console.log('usuarioId', this.usuarioId)
  
  }

  // =================
  // UTILERIAS
  // =================
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(0, this.totalSize);
    this.dataSourceShow = new MatTableDataSource(part);
    this.dataSourceShow.sort = this.sort;
    this.dataSourceShow.paginator = this.paginator;
  }

  view(element, event){
    window.open(element.url);
    // this.getImage();
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

  // =================
  // SERVICIOS
  // =================

  getsupplierDocuments(){

    let arraySupplier: any[] = [];
    let arrayDocumentos : any;
    let arrayDocumentosFiltrados : any;
    let arrayDocumentoPorProveedor : any;
    let urlShow : any = '';
    let estadoShow : number = 3;
    let idDocumentShow : number = 0;

        // Proyectos registrados
        this._supplyservice.getsupplyById(this.providerId).subscribe(
          prov=> {
            console.log('Proveedores', prov);
            this.dataSourceSupplier = new MatTableDataSource(prov);
                console.log('AQUI ESTA EL PROVEEDOR', this.dataSourceSupplier);
              
    // Lista de documentos
    this._UploadFileService.getdocumentsAll().subscribe(
      res=> {
        console.log('Documentos', res);
        // this.getsupplyById(this.providerId);

            arrayDocumentos = res;

            arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.providerId && e.categoriaDocumento > 100 && e.categoriaDocumento < 200);

            this.arraySupplierGlobal = [];
            this.arraySupplierGlobal.push({supplier_id : this.providerId, documento : this.pageInfo.nombre, estatus : 3, aprobacion : false, url : '', idDocumento : 0})

            this.showDocument(arrayDocumentosFiltrados, 101, 2022, 1, 'Dirección: ' + this.dataSourceSupplier.filteredData.direccion);
            this.showDocument(arrayDocumentosFiltrados, 102, 2022, 1, 'RFC: ' + this.dataSourceSupplier.filteredData.rfc);

            this.arraySupplierGlobal.push({supplier_id : 1, documento : 'Contacto: ' + this.dataSourceSupplier.filteredData.contacto, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
              , {supplier_id : 1, documento : 'Ciudad: ' + this.dataSourceSupplier.filteredData.ciudad, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
              , {supplier_id : 1, documento : 'Estado: ' + this.dataSourceSupplier.filteredData.estado, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
              , {supplier_id : 1, documento : 'Objeto Social: ' + this.dataSourceSupplier.filteredData.objetoSocial, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
              , {supplier_id : 1, documento : 'Tipo Persona: ' + this.dataSourceSupplier.filteredData.tipoPersona, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
              , {supplier_id : 1, documento : 'Teléfono contacto: ' + this.dataSourceSupplier.filteredData.telefonoContacto, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
              , {supplier_id : 1, documento : 'Correo electrónico: ' + this.dataSourceSupplier.filteredData.correo, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
            )

            this.showDocument(arrayDocumentosFiltrados, 103, 2022, 1, 'Acta constitutiva');
            this.showDocument(arrayDocumentosFiltrados, 104, 2022, 1, 'INE');
            this.showDocument(arrayDocumentosFiltrados, 105, 2022, 1, 'Alta IMSS');
            this.showDocument(arrayDocumentosFiltrados, 106, 2022, 1, 'Alta Infonavit');
            this.showDocument(arrayDocumentosFiltrados, 107, 2022, 1, 'Alta SAT');
            this.showDocument(arrayDocumentosFiltrados, 108, 2022, 1, 'Estado de cuenta');
            this.showDocument(arrayDocumentosFiltrados, 109, 2022, 1, 'Estado Financiero');

            this.arraySupplierGlobal.push(
                              {supplier_id : 1, documento : '¿Es usted prestador de servicios especializados?: ' + this.dataSourceSupplier.filteredData.prestadorServicio, estatus : 3, aprobacion : false, url : '', idDocumento : 0}
            )

            this.showDocument(arrayDocumentosFiltrados, 110, 2022, 1, 'Contrato');
            this.showDocument(arrayDocumentosFiltrados, 111, 2022, 1, 'Repse del proveedor');

            this.dataSourceShow = new MatTableDataSource(this.arraySupplierGlobal);
          },
          error => console.log("error consulta documentos",error)
        )
      },
      error => console.log("error consulta proveedores",error)
    )
  }

  fileDownload : any;

  getImage(){
    this._UploadFileService.getFiles('direccion_dos.PNG' ,'generales').then(urlImagen => {
      this.fileDownload = urlImagen;
      window.open(urlImagen.toString());
    });
  }

  showDocument(arrayDocumentosFiltrados : any, categoriaDocumento : number, anio: number, mes: number, titulo : string){
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
    this.arraySupplierGlobal.push({supplier_id : this.providerId, documento : titulo, estatus : estadoShow, aprobacion : true, url : urlShow, idDocumento : idDocumentShow})
  }

  aproveRejectDocument(arrayToDb : any){
    // Inserta Archivos en base de datos
    this._UploadFileService.postDocumentosAprobarRechazar(arrayToDb).subscribe(
      res=> {
        console.log('APROBAR DOCUMENTO', res);
        this.getsupplierDocuments();
        this.showMessage(2, 'Guardardo', 'success', 'Se actualizo el registro correctamente', 'Cerrar');
      },
      error => console.log("error al aprobar el ocumento",error)
    )
  }
  // getsupplyById(supplierId : number){

  //   // Proyectos registrados
  //   this._supplyservice.getsupplyById(supplierId).subscribe(
  //     res=> {
  //       console.log('Proveedores', res);
  //       this.dataSourceSupplier = new MatTableDataSource(res);
  //     },
  //     error => console.log("error consulta regiones",error)
  //   )
  // }

}


