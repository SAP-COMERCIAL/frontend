import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
import jwt_decode from "jwt-decode";
import { animation } from '@angular/animations';

@Component({
  selector: 'app-repse-report',
  templateUrl: './repse-report.component.html',
  styleUrls: ['./repse-report.component.css']
})
export class RepseReportComponent implements OnInit {
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
datasourceSupplier : any;
pageInfo : any;
providerId : number;
arraySupplierGlobal : any = [];
usuarioId : string;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();
  @ViewChild(MatTable) tabla1: MatTable<any>;

  displayedColumns = ['supplier_id', 'nombre', 'rfc', 'periodicidad', 'anio', 'mes', 'documento', 'estatus'];

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
    this.decode();
    console.log('aqui empieza todo', this.pageInfo)
    this.providerId = this.pageInfo.proveedorid;

    this.getsupplier();

    // this.getsupplierDocuments();
  }
  descargarExcel(){
    let estatus : string;

    console.log('Descargar a excel', this.tabla1["_data"]);
    let dataSourceShowToExcel : any[] = [];

    estatus = 'NO ENVIADA';

    this.tabla1["_data"].forEach(element => {

      switch(element.estatus){
        case(0) : estatus = 'POR REVISAR'; break;
        case(1) : estatus = 'APROBADO'; break;
        case(2) : estatus = 'RECHAZADO'; break;
        case(3) : estatus = 'NO APLICA'; break;
        case(4) : estatus = 'NO ENVIADA'; break;
        default : estatus = 'NO ENVIADA'; break;
      }

    dataSourceShowToExcel.push({
                              nombre : element.nombre
                              , RFC : element.rfc
                              , Periodicidad : element.periodicidad
                              , Año : element.anio
                              , Mes : element.mes
                              , Documento : element.documento
                              , estatus : estatus
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Documentos');  
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

        this.dataSourceShow = null;
        this.arraySupplierGlobal = [];

        this.datasourceSupplier.filteredData.forEach(element => {

          // if (element.proveedorid == 12){
          arrayDocumentosFiltrados = null;

          // ================
          // GENERAL
          // ================
          arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == element.proveedorid && e.categoriaDocumento > 100 && e.categoriaDocumento < 200);
          this.showDocument(arrayDocumentosFiltrados, 101, anio, 0, 'Dirección: ', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 102, anio, 0, 'RFC: ', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 103, anio, 0, 'Acta constitutiva', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 104, anio, 0, 'INE', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 105, anio, 0, 'Alta IMSS', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 106, anio, 0, 'Alta Infonavit', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 107, anio, 0, 'Alta SAT', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 108, anio, 0, 'Estado de cuenta', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 109, anio, 0, 'Estado Financiero', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 110, anio, 0, 'Contrato', element.nombre, element.rfc, 'General');
          this.showDocument(arrayDocumentosFiltrados, 111, anio, 0, 'Repse del proveedor', element.nombre, element.rfc, 'General');

          // ================
          // MENSUAL
          // ================
          arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == element.proveedorid && e.categoriaDocumento > 200 && e.categoriaDocumento < 300 && e.anno == anio && e.mes == mes);     

          this.showDocument(arrayDocumentosFiltrados, 201, anio, mes, 'Listado trabajadores Excel o PDF', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 202, anio, mes, 'CFDI mensual de trabajadores', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 203, anio, mes, 'Comprobante de pago del Banco en PDF', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 204, anio, mes, 'SIPARE en pdf', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 205, anio, mes, 'Cedula mensual SUA en PDF (trabajadores)', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 206, anio, mes, 'Comprobante de pago del Banco en PDF (ISR)', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 207, anio, mes, 'Declaración de ISR', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 208, anio, mes, 'Declaración IVA', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 209, anio, mes, 'Comprobante de pago del Banco en PDF (IVA)', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 210, anio, mes, 'Opinión Positiva IMSS (Un mes atrás)', element.nombre, element.rfc, 'Mensual');
          this.showDocument(arrayDocumentosFiltrados, 211, anio, mes, 'Opinion Positiva SAT (Un mes atrás)', element.nombre, element.rfc, 'Mensual');

          // ================
          // BIMESTRAL
          // ================
          if(mes < 7){
            arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == element.proveedorid && e.categoriaDocumento > 300 && e.categoriaDocumento < 400 && e.anno == anio && e.mes == mes);
            this.showDocument(arrayDocumentosFiltrados, 301, anio, mes, 'Comprobante de pago del Banco en PDF', element.nombre, element.rfc, 'Bimestral');
            this.showDocument(arrayDocumentosFiltrados, 302, anio, mes, 'SIPARE en pdf', element.nombre, element.rfc, 'Bimestral');
            this.showDocument(arrayDocumentosFiltrados, 303, anio, mes, 'Cedula bimetral SUA en PDF (trabajadores)', element.nombre, element.rfc, 'Bimestral');
            this.showDocument(arrayDocumentosFiltrados, 304, anio, mes, 'Opinion Positiva INFONAVIT (Dos meses atrás)', element.nombre, element.rfc, 'Bimestral');
          }
          // ================
          // CUATRIMESTRAL
          // ================
          if(mes < 4){
            arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.providerId && e.categoriaDocumento > 400 && e.categoriaDocumento < 500 && e.anno == anio && e.mes == mes);
            this.showDocument(arrayDocumentosFiltrados, 401, anio, mes, 'Reporte al IMSS y su acuse de presentacion ICSOE en PDF', element.nombre, element.rfc, 'Cuatrimestral');
            this.showDocument(arrayDocumentosFiltrados, 402, anio, mes, 'Reporte al INFONAVIT y su acuse de presentacion SISUB en PDF', element.nombre, element.rfc, 'Cuatrimestral');
          }
        // }
        });

        this.dataSourceShow = new MatTableDataSource(this.arraySupplierGlobal);
        

      },
      error => console.log("error consulta regiones",error)
    )

  }

  showDocument(arrayDocumentosFiltrados : any, categoriaDocumento : number, anio: number, mes: number, titulo : string, nombreShow : string, rfcShow : string, periodicidadShow : string){
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
    
    this.arraySupplierGlobal.push({supplier_id : this.providerId, documento : titulo, estatus : estadoShow, aprobacion : true, url : urlShow, idDocumento : idDocumentShow, nombre : nombreShow, rfc : rfcShow, periodicidad : periodicidadShow, anio : anio, mes : mes})
  }

  getsupplier(){

    let arraySort: any;

    // Proyectos registrados
    this._supplyservice.getsupplyAll().subscribe(
      res=> {
        console.log('Proveedores', res);

        // Ordenado de arreglo
        arraySort = res.sort(function (a, b) {
          if (a.supplier_id < b.supplier_id) {
            return 1;
          }
          if (a.supplier_id > b.supplier_id) {
            return -1;
          }
          return 0;
        });
        
        this.datasourceSupplier = new MatTableDataSource(arraySort);
        // this.array = res;
        // this.totalSize = this.array.length;
        
        // this.iterator();
        // this.datasourceSupplier.sort = this.sort;
        
      },
      error => console.log("error consulta regiones",error)
    )
  }


}



