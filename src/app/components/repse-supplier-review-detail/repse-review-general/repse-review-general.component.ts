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

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['supplier_id', 'documento', 'estatus', 'ver', 'revision'];

  public newForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<supplierModel>
    , public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice
    , private _UploadFileService : UploadFileService
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

    console.log('pageInfo', this.pageInfo);

    this.providerId = this.pageInfo.proveedorid;

    this.getsupplierDocuments();
  }
  descargarExcel(){
    console.log('Descargar a excel');
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
    console.log('Editar un proveedores', element.proveedorId);

    const dialogConfig = new MatDialogConfig();

    console.log('Proveedores', element.proveedorId)
    console.log('data', element);
    dialogConfig.data = {
      id: 1,
      title: 'APROBAR/DENEGAR ARCHIVO',
      arrayData : element,
      proveedorId: element.proveedorId,
      idDocumento: element.idDocument,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '550px';
    dialogConfig.height = '300px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(RepseReviewAproveComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
    });
  }

  filtrar(event : Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
  }

  save(event){

  }

  cancel(event){
    this.dialogRef.close();
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
    console.log('SE MUESTRA LA IMAGEN O EL ARCHIVO', element);
    window.open(element.url);
    // this.getImage();
  }


  // =================
  // SERVICIOS
  // =================

  getsupplierDocuments(){

    let arraySupplier: any[] = [];
    let arrayDocumentos : any;
    let arrayDocumentosFiltrados : any;
    let arrayDocumentoPorProveedor : any;
    let urlArray : any = '';
    let estadoArray : number = 3;

    // Lista de documentos
    this._UploadFileService.getdocumentsAll().subscribe(
      res=> {
        console.log('Documentos', res);

        arrayDocumentos = res;

        arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.providerId && e.categoriaDocumento > 100 && e.categoriaDocumento < 200);

        arraySupplier = [];
        arraySupplier.push({supplier_id : this.providerId, documento : this.pageInfo.nombre, estatus : 3, aprobacion : false, url : ''})

        // Direccion
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 101)

        console.log('doc x prov', arrayDocumentoPorProveedor);

        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '';
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Dirección', estatus : estadoArray, aprobacion : true, url : urlArray, idDocumento : arrayDocumentoPorProveedor.idDocumento})
       
        // RFC
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 102)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'RFC', estatus : estadoArray, aprobacion : true, url : urlArray, idDocumento : arrayDocumentoPorProveedor.idDocumento})
      
        // Contacto - Correo electronico
        arraySupplier.push({supplier_id : 1, documento : 'Contacto', estatus : 3, aprobacion : false, url : ''}
          , {supplier_id : 1, documento : 'Ciudad', estatus : 3, aprobacion : false, url : ''}
          , {supplier_id : 1, documento : 'Estado', estatus : 3, aprobacion : false, url : ''}
          , {supplier_id : 1, documento : 'Objeto Social', estatus : 3, aprobacion : false, url : ''}
          , {supplier_id : 1, documento : 'Tipo Persona', estatus : 3, aprobacion : false, url : ''}
          , {supplier_id : 1, documento : 'Teléfono contacto', estatus : 3, aprobacion : false, url : ''}
          , {supplier_id : 1, documento : 'Correo electrónico', estatus : 3, aprobacion : false, url : ''}
        )

        // Acta constitutiva
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 103)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Acta constitutiva', estatus : estadoArray, aprobacion : true, url : urlArray})

        // INE
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 104)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'INE', estatus : estadoArray, aprobacion : true, url : urlArray})

        // Alta IMSS
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 105)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Alta IMSS', estatus : estadoArray, aprobacion : true, url : urlArray})

        // Alta Infonavit
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 106)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Alta Infonavit', estatus : estadoArray, aprobacion : true, url : urlArray})

        // Alta SAT
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 107)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Alta SAT', estatus : estadoArray, aprobacion : true, url : urlArray})

        // Estado de cuenta
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 108)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Estado de cuenta', estatus : estadoArray, aprobacion : true, url : urlArray})

        // Estado Financiero
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 109)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Estado Financiero', estatus : estadoArray, aprobacion : true, url : urlArray})

        arraySupplier.push(
                          {supplier_id : 1, documento : '¿Es usted prestador de servicios especializados?', estatus : 3, aprobacion : false, url : ''}
                        , {supplier_id : 1, documento : 'Contrato', estatus : 3, aprobacion : false, url : ''}
        )

        // Repse del proveedor
        urlArray = '';
        estadoArray = 4;
        arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == 110)
        if(arrayDocumentoPorProveedor != undefined){ 
          urlArray = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '' 
          estadoArray = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
        }
        arraySupplier.push({supplier_id : this.providerId, documento : 'Repse del proveedor', estatus : estadoArray, aprobacion : true, url : urlArray})

        this.dataSourceShow = new MatTableDataSource(arraySupplier);

        console.log('ARREGLO SUPPLY', arraySupplier)

        console.log('documentos filtrados', arrayDocumentoPorProveedor)

        
      },
      error => console.log("error consulta regiones",error)
    )
  }

  fileDownload : any;

  getImage(){
    this._UploadFileService.getFiles('direccion_dos.PNG' ,'generales').then(urlImagen => {
      console.log(urlImagen);
      this.fileDownload = urlImagen;
      window.open(urlImagen.toString());
    });
  }

}
