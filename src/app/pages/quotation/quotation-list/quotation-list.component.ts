import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { quotationListModel } from 'src/app/models/quotation-list.model';
import { quotationservice } from 'src/app/services/quotation/quotation.service';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as moment from 'moment';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { QuotationDetailComponent } from 'src/app/components/quotations/quotation-detail/quotation-detail.component';
import { CategoriesComponent } from 'src/app/components/categories/categories/categories.component';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {
// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<quotationListModel>

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['codigo_requisicioninterna', 'codigo', 'fecha', 'estado', 'editar'];
  
  constructor(public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _quotationService : quotationservice) { }

  ngOnInit(): void {

    this.getQuotationAll();

    // let arrayData : any;

    // arrayData = [{codigo_requisicioninterna : 1, codigo : 1, fecha : '2020-01-01', estado : 'ACTIVO', requisicioninterna_id : 1, cotizacion_id : 1}]
    // this.dataSourceShow = new MatTableDataSource(arrayData);

  }

  getQuotationAll(){
    // Proyectos registrados
    this._quotationService.getQuotationAll().subscribe(
      res=> {
        console.log('Cotizaciones', res);
        this.dataSourceShow = new MatTableDataSource(res);
        this.array = res;
        this.totalSize = this.array.length;
        
        this.iterator();
        this.dataSourceShow.sort = this.sort;
        
      },
      error => console.log("error consulta regiones",error)
    )
  }
  

  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({cotizacion_id : element.cotizacion_id
                              , requisicioninterna_id : element.requisicioninterna_id
                              , codigo_requisicioninterna : element.codigo_requisicioninterna
                              , codigo : element.codigo
                              , fecha : moment(element.fecha, 'YYYY-MM-DD').format('DD-MM-YYYY')
                              , estado : element.estado
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');  
  }

  nuevaCotizacion(evetn){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'COTIZACIONES',
      arrayData : null,
      requisicionId: 0,
      cotizacionId : 0
     
    }
    dialogConfig.width = '1200px';
    dialogConfig.height = '700px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(QuotationDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  editCotizacion(event){
    console.log('Edita cotizaciones');

    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.data = {
    //   id: 1,
    //   title: 'COTIZACIONES',
    //   arrayData : null,
    //   requisicionId: 1
     
    // }
    // dialogConfig.width = '900px';
    // dialogConfig.height = '400px';
    // dialogConfig.disableClose = true;

    // const dialogRef = this.dialog.open(RequisitionDetailComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   window.location.reload();
    // });
  }

  filtrar(event : Event){
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

}
