import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { requisitionModel } from 'src/app/models/requisition.model';
import { warehouseModel } from 'src/app/models/warehouse.model';
import { requisitionservice } from 'src/app/services/requisition/requisition.service';
import { RequisitionDetailComponent } from 'src/app/components/requisitions/requisition-detail/requisition-detail.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as moment from 'moment';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { ProjectCaptureDetailComponent } from 'src/app/components/project-capture-detail/project-capture-detail/project-capture-detail.component';
import { CategoriesComponent } from 'src/app/components/categories/categories/categories.component';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';

@Component({
  selector: 'app-warehouse-review',
  templateUrl: './warehouse-review.component.html',
  styleUrls: ['./warehouse-review.component.css']
})
export class WarehouseReviewComponent implements OnInit {
// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<warehouseModel>

@ViewChild(MatSort,{static:true}) sort: MatSort;
@ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
@Output() filterChange = new EventEmitter();

displayedColumns = ['requisicion_Codigo', 'descripcion', 'Estatus', 'editar'];

  constructor(public dialog: MatDialog
    , private _excelService : ExcelServiceService) { }

  ngOnInit(): void {
    let arrayData : any;

    arrayData = [{requisicion_Codigo : 1, descripcion : 'Descripción', estado : 'ACTIVO'}]
    this.dataSourceShow = new MatTableDataSource(arrayData);
  }

  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({requisicion_Codigo : element.requisicion_Codigo
                              , descripcion : element.descripcion
                              , estatus : element.estado
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');  
  }

  filtrar(event){}

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
