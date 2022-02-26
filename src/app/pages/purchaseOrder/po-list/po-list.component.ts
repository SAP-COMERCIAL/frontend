import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as moment from 'moment';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { CategoriesComponent } from 'src/app/components/categories/categories/categories.component';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { poModel } from 'src/app/models/po.model';
import { purchaseOrderservice } from 'src/app/services/PurchaseOrder.service';
import { PoDetailComponent } from 'src/app/components/po-detail/po-detail.component';

import jsPDF from 'jspdf';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-po-list',
  templateUrl: './po-list.component.html',
  styleUrls: ['./po-list.component.css']
})
export class PoListComponent implements OnInit {
  // =====================
  // DECLARACIONES
  // =====================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<poModel>

  @ViewChild('pdfTable') pdfTable: ElementRef;
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['ordendecompra_id', 'ordendecompra_codigo', 'cotizacion_codigo', 'proveedor_nombre', 'ordendecompra_fecha', 'Estatus', 'editar', 'cancelar', 'autorizar', 'pdf'];
  
  buscar:any;

  constructor(public dialog: MatDialog
          , private _excelService : ExcelServiceService
          , private _purchaseOrderService : purchaseOrderservice) { }


  // =====================
  // PROCEDIMIENTOS
  // =====================

  ngOnInit(): void {

    this.getPO_Hdr();
  }

  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({proyecto_id : element.proyecto_id
                              , categoria : element.codigo_proyectocategoria
                              , requisicion : element.requisicioninterna_id
                              , Fecha_Requisicion : moment(element.Fecha_Requisicion, 'YYYY-MM-DD').format('DD-MM-YYYY')
                              , estatus : element.estado
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');  
  }

  nuevaOrdenDeCompra(event){
    console.log('Alta de requisiciones');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'ORDEN DE COMPRA',
      arrayData : null,
      requisicionId: 1,
      estadoPantalla : 'new'
     
    }
    dialogConfig.width = '1500px';
    dialogConfig.height = '9000px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(PoDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getPO_Hdr();
    });
  }

  editRequisicion(element, event){
    console.log('Alta de requisiciones');

    const dialogConfig = new MatDialogConfig();

    console.log('autoriza registro', element);
    dialogConfig.data = {
      id: 1,
      title: 'REQUISICIONES',
      arrayData : element,
      requisicionId: 1,
      estadoPantalla : 'edition'
     
    }
    dialogConfig.width = '1500px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(PoDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getPO_Hdr();
    });
  }

  aproveODC(element, event){
    console.log('Aprueba orden de compra');

    const dialogConfig = new MatDialogConfig();

    console.log('aprueba odc', element)

    dialogConfig.data = {
      id: 1,
      title: 'ORDEN DE COMPRA',
      arrayData : element,
      requisicionId: 1,
      estadoPantalla : 'aprove',
     
    }
    dialogConfig.width = '1500px';
    dialogConfig.height = '9000px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(PoDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getPO_Hdr();
    });
  }

  cancelaODC(element, event : Event){
    this.updateODCStatus(element, 4);
  }

  printPDF(){
    this.downloadAsPDF();
  }

  // =====================
  // UTILERIAS
  // =====================

  public downloadAsPDF() {
    const doc = new jsPDF();
   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);
    // var html = htmlToPdfmake(AllTable.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
  }

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

  // =====================
  // CONSILTA DE SERVICIOS
  // =====================

  getPO_Hdr(){

    let arraySort: any;

    // Proyectos registrados
    this._purchaseOrderService.getPOAll().subscribe(
      res=> {
        console.log('PurchaseOrder', res);

        // Ordenado de arreglo
        arraySort = res.sort(function (a, b) {
          if (a.ordendecompra_id < b.ordendecompra_id) {
            return 1;
          }
          if (a.ordendecompra_id > b.ordendecompra_id) {
            return -1;
          }
          return 0;
        });
        
        this.dataSourceShow = new MatTableDataSource(arraySort);
        this.array = res;
        this.totalSize = this.array.length;
        
        this.iterator();
        this.dataSourceShow.sort = this.sort;
        
      },
      error => console.log("error consulta regiones",error)
    )
  }

  cancelODCToDB(element){
    this._purchaseOrderService.putPOCancel(element.ordendecompra_id).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  updateODCStatus(element, statusToDb){
    let arrayToDb : any;

    arrayToDb = ({ordendecompra_id : element.ordendecompra_id, estatus : statusToDb, usuario : 1})

    console.log('cancelado', element)

    this._purchaseOrderService.updatePOStatus(arrayToDb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        this.getPO_Hdr();
      },
      error => console.log("error alta de proyectos",error)
    )
  }

}
