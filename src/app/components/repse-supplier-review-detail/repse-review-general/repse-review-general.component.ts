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
arraySupplierGlobal : any = [];

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
    });
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

    // Lista de documentos
    this._UploadFileService.getdocumentsAll().subscribe(
      res=> {
        console.log('Documentos', res);

        arrayDocumentos = res;

        arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.providerId && e.categoriaDocumento > 100 && e.categoriaDocumento < 200);

        this.arraySupplierGlobal = [];
        this.arraySupplierGlobal.push({supplier_id : this.providerId, documento : this.pageInfo.nombre, estatus : 3, aprobacion : false, url : '', idDocumento : 0})

        this.showDocument(arrayDocumentosFiltrados, 101, 2022, 1, 'Dirección');
        this.showDocument(arrayDocumentosFiltrados, 102, 2022, 1, 'RFC');

        this.arraySupplierGlobal.push({supplier_id : 1, documento : 'Contacto', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
          , {supplier_id : 1, documento : 'Ciudad', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
          , {supplier_id : 1, documento : 'Estado', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
          , {supplier_id : 1, documento : 'Objeto Social', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
          , {supplier_id : 1, documento : 'Tipo Persona', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
          , {supplier_id : 1, documento : 'Teléfono contacto', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
          , {supplier_id : 1, documento : 'Correo electrónico', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
        )

        this.showDocument(arrayDocumentosFiltrados, 103, 2022, 1, 'Acta constitutiva');
        this.showDocument(arrayDocumentosFiltrados, 104, 2022, 1, 'INE');
        this.showDocument(arrayDocumentosFiltrados, 105, 2022, 1, 'Alta IMSS');
        this.showDocument(arrayDocumentosFiltrados, 106, 2022, 1, 'Alta Infonavit');
        this.showDocument(arrayDocumentosFiltrados, 107, 2022, 1, 'Alta SAT');
        this.showDocument(arrayDocumentosFiltrados, 108, 2022, 1, 'Estado de cuenta');
        this.showDocument(arrayDocumentosFiltrados, 109, 2022, 1, 'Estado Financiero');

        this.arraySupplierGlobal.push(
                          {supplier_id : 1, documento : '¿Es usted prestador de servicios especializados?', estatus : 3, aprobacion : false, url : '', idDocumento : 0}
        )

        this.showDocument(arrayDocumentosFiltrados, 110, 2022, 1, 'Contrato');
        this.showDocument(arrayDocumentosFiltrados, 111, 2022, 1, 'Repse del proveedor');

        this.dataSourceShow = new MatTableDataSource(this.arraySupplierGlobal);
      },
      error => console.log("error consulta regiones",error)
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

}
