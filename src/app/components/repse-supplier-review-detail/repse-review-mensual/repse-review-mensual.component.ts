import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { SupplierDetailComponent } from 'src/app/components/supplier-detail/supplier-detail.component';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { RepseSupplierReviewDetailComponent } from '../../../components/repse-supplier-review-detail/repse-supplier-review-detail.component';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY } from '@angular/material/autocomplete';
import { RepseReviewAproveComponent } from '../repse-review-aprove/repse-review-aprove.component';

@Component({
  selector: 'app-repse-review-mensual',
  templateUrl: './repse-review-mensual.component.html',
  styleUrls: ['./repse-review-mensual.component.css']
})
export class RepseReviewMensualComponent implements OnInit {
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

      this.newForm = this.formBuilder.group({
        anio: new FormControl('', [Validators.required]),
        mes: new FormControl('', [Validators.required])
      })
    }

  // =================
  // PROCEDIMIENTOS
  // =================


  ngOnInit(): void {
    console.log('aqui empieza todo', this.pageInfo)
    this.providerId = this.pageInfo.proveedorid;

    // this.getsupplierDocuments();
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

  view(element, event){
    window.open(element.url);
    // this.getImage();
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

  search(form, event){
    this.getsupplierDocuments();
  }

  // =================
  // SERVICIOS
  // =================

  getsupplierDocuments(){

    let arrayDocumentos : any;
    let arrayDocumentosFiltrados : any;
    let anio : number = 0;
    let mes : number = 0;
                    
    this._UploadFileService.getdocumentsAll().subscribe(
      res=> {
        console.log('Documentos obtenidos', res);

        arrayDocumentos = res;

        if(this.newForm.controls["anio"].value != ''){
          anio = this.newForm.controls["anio"].value;
          mes = this.newForm.controls["mes"].value;
        }

        arrayDocumentosFiltrados = null;
        arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.providerId && e.categoriaDocumento > 200 && e.categoriaDocumento < 300 && e.anno == anio && e.mes == mes);

        this.dataSourceShow = null;
        this.arraySupplierGlobal = [];
        this.showDocument(arrayDocumentosFiltrados, 201, anio, mes, 'Listado trabajadores Excel o PDF');
        this.showDocument(arrayDocumentosFiltrados, 202, anio, mes, 'CFDI mensual de trabajadores');
        this.showDocument(arrayDocumentosFiltrados, 203, anio, mes, 'Comprobante de pago del Banco en PDF');
        this.showDocument(arrayDocumentosFiltrados, 204, anio, mes, 'SIPARE en pdf');
        this.showDocument(arrayDocumentosFiltrados, 205, anio, mes, 'Cedula mensual SUA en PDF (trabajadores)');
        this.showDocument(arrayDocumentosFiltrados, 206, anio, mes, 'Comprobante de pago del Banco en PDF (ISR)');
        this.showDocument(arrayDocumentosFiltrados, 207, anio, mes, 'Declaración de ISR');
        this.showDocument(arrayDocumentosFiltrados, 208, anio, mes, 'Declaración IVA');
        this.showDocument(arrayDocumentosFiltrados, 209, anio, mes, 'Comprobante de pago del Banco en PDF (IVA)');
        this.showDocument(arrayDocumentosFiltrados, 210, anio, mes, 'Opinión Positiva IMSS (Un mes atrás)');
        this.showDocument(arrayDocumentosFiltrados, 211, anio, mes, 'Opinion Positiva SAT (Un mes atrás)');

        this.dataSourceShow = new MatTableDataSource(this.arraySupplierGlobal);

      },
      error => console.log("error consulta regiones",error)
    )

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



