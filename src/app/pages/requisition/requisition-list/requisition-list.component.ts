import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { requisitionModel } from 'src/app/models/requisition.model';
import { requisitionservice } from 'src/app/services/requisition/requisition.service';
import { RequisitionDetailComponent } from 'src/app/components/requisitions/requisition-detail/requisition-detail.component';
import * as moment from 'moment';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';

@Component({
  selector: 'app-requisition-list',
  templateUrl: './requisition-list.component.html',
  styleUrls: ['./requisition-list.component.css']
})
export class RequisitionListComponent implements OnInit {
// =================
// DECLARACIONES
// =================

// Para paginación
fEstatus : any = '0';
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<requisitionModel>
dataSourceShowOriginal : MatTableDataSource<requisitionModel>

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  // displayedColumns = ['proyecto_id', 'Categoria_Id', 'Requisicion_Id', 'Fecha_Requisicion', 'Estatus', 'editar'];
  displayedColumns = ['codigo_proyectocategoria', 'codigo', 'fecha', 'estado', 'editar'];
  
  constructor(public dialog: MatDialog
          , private _excelService : ExcelServiceService
          , private _requisitionService : requisitionservice) { }


  // =================
  // PROCEDIMIENTOS
  // =================

  ngOnInit(): void {

    this.getrequisition();
      
  }

  descargarExcel(){
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({
                              // proyecto_id : element.proyecto_id
                              categoria : element.codigo_proyectocategoria
                              , requisicion : element.requisicioninterna_id
                              , Fecha_Requisicion : moment(element.Fecha_Requisicion, 'YYYY-MM-DD').format('DD-MM-YYYY')
                              , estatus : element.estado
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');  
  }

  nuevaRequisicion(evetn){
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'REQUISICIONES',
      arrayData : null,
      requisicionId: 0,
      estadoPantalla : 'new'
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(RequisitionDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getrequisition();
    });
  }

  editRequisicion(element){
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'REQUISICIONES',
      arrayData : element,
      requisicionId: element.requisicioninterna_id,
      estadoPantalla : 'edit'
     
    }
    dialogConfig.width = '1200px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(RequisitionDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getrequisition();
    });
  }

  filtrar(event : Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
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

  emitFilters(event, filtro) {
    this.dataSourceShow = this.dataSourceShowOriginal;
    let filtroEstatus : number = 0;
    let arrayFiltroData : MatTableDataSource<requisitionModel> = null;

    if(filtro === 'Estatus'){
    //   this.fEstatus = (this.fEstatus == undefined) ? '0' : event; 
      filtroEstatus = (filtroEstatus == undefined) ? 0 : event.value;
      filtroEstatus = (event.value == undefined) ? 0 : filtroEstatus;
    //   this.fEstatus.value = (this.fEstatus == undefined) ? '0' : event.value.toString(); 
    }

    arrayFiltroData = new MatTableDataSource(this.dataSourceShow.filteredData.filter(elemento => (
                                                                                  (elemento.estado == filtroEstatus ) || (filtroEstatus == 99)
                                                                                   )));

    this.dataSourceShow = new MatTableDataSource(arrayFiltroData.filteredData);

    this.array = this.dataSourceShow.filteredData;
    this.totalSize = this.dataSourceShow.filteredData.length;
    this.iterator();
    this.dataSourceShow.sort = this.sort;
  }

  // =================
  // SERVICIOS
  // =================

  getrequisition(){
    
    let arraySort: any;

    // Proyectos registrados
    this._requisitionService.getRequisitionAll().subscribe(
      res=> {
        console.log('Requisiciones', res);
        
        // Ordenado de arreglo
        arraySort = res.sort(function (a, b) {
          if (a.requisicioninterna_id < b.requisicioninterna_id) {
            return 1;
          }
          if (a.requisicioninterna_id > b.requisicioninterna_id) {
            return -1;
          }
          return 0;
        });

        // this.dataSourceShow = new MatTableDataSource(arraySort);

        this.dataSourceShowOriginal = new MatTableDataSource(arraySort);

        this.emitFilters(0, 'Estatus')

        // this.array = res;
        // this.totalSize = this.array.length;
        
        // this.iterator();
        // this.dataSourceShow.sort = this.sort;
        
      },
      error => console.log("error consulta regiones",error)
    )
  }

}
