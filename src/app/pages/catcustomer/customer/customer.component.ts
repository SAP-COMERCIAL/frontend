import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { customerModel } from 'src/app/models/customer.model';
import { customerservice } from 'src/app/services/customer.service';
import { CustomerDetailComponent } from 'src/app/components/customer-detail/customer-detail.component';

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
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

// =================
// DECLARACIONES
// =================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<customerModel>

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estado', 'edit'];

  constructor(public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _customerservice : customerservice) { }

  // =================
  // PROCEDIMIENTOS
  // =================

  ngOnInit(): void {

    this.getcustomer();
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

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Clientes');  
  }

  newcustomer(evetn){
    console.log('Alta de cliente');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'CLIENTE',
      arrayData : null,
      requisicionId: 0
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(CustomerDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
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

  // =================
  // SERVICIOS
  // =================

  getcustomer(){
    // Proyectos registrados
    this._customerservice.getcustomerAll().subscribe(
      res=> {
        console.log('Clientes', res);
        this.dataSourceShow = new MatTableDataSource(res);
        this.array = res;
        this.totalSize = this.array.length;
        
        this.iterator();
        this.dataSourceShow.sort = this.sort;
        
      },
      error => console.log("error consulta regiones",error)
    )
  }

}
