import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { quotationListModel } from 'src/app/models/quotation-list.model';
import { quotationservice } from 'src/app/services/quotation/quotation.service';
import * as moment from 'moment';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { QuotationDetailComponent } from 'src/app/components/quotations/quotation-detail/quotation-detail.component';
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

  }

  getQuotationAll(){
    
    let arrayTemp : any = [];
    let arraySort: any;

    // Proyectos registrados
    this._quotationService.getQuotationAll().subscribe(
      res=> {

        res.forEach(element => {
          if(element.estado == '0'){
            arrayTemp.push(element);
          }
        });
        
        console.log('Cotizaciones', arrayTemp);
        // Ordenado de arreglo
        arraySort = arrayTemp.sort(function (a, b) {
          if (a.cotizacion_id < b.cotizacion_id) {
            return 1;
          }
          if (a.cotizacion_id > b.cotizacion_id) {
            return -1;
          }
          return 0;
        });

        this.dataSourceShow = new MatTableDataSource(arraySort);

        console.log('nuevas cotizaciones', this.dataSourceShow);
        this.array = arraySort;
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
      cotizacionId : 0,
      estadoPantalla : 'new'

    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(QuotationDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getQuotationAll();
    });
  }

  editCotizacion(element : any, event){
    console.log('Edita cotizaciones');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'COTIZACIONES',
      arrayData : element,
      requisicionId: 0,
      cotizacionId : element.cotizacion_id,
      estadoPantalla : 'edit'
      
    }
    dialogConfig.width = '1200px';
    dialogConfig.height = '700px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(QuotationDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getQuotationAll();
    });
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
