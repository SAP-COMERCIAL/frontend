import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { SupplierDetailComponent } from 'src/app/components/supplier-detail/supplier-detail.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { RepseSupplierReviewDetailComponent } from '../../../components/repse-supplier-review-detail/repse-supplier-review-detail.component';

@Component({
  selector: 'app-repse-supplier-review',
  templateUrl: './repse-supplier-review.component.html',
  styleUrls: ['./repse-supplier-review.component.css']
})
export class RepseSupplierReviewComponent implements OnInit {

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

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estado', 'autorize'];

  constructor(public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice) { 

      
    }

  // =================
  // PROCEDIMIENTOS
  // =================
  ngOnInit(): void {
    this.getsupplier();
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

  newcustomer(evetn){
    console.log('Alta de proveedores');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'PROVEEDOR',
      arrayData : null,
      proveedorId: 0,
      estadoPantalla: 'New'
     
    }
    dialogConfig.width = '1800px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SupplierDetailComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
    });
  }

  edit(element, event){
    console.log('Editar un proveedores', element.proveedorId);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'PROVEEDOR',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '1800px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(RepseSupplierReviewDetailComponent, dialogConfig);
    // const dialogRef = this.dialog.open(SupplierDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
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

  getsupplier(){
    // Proyectos registrados
    this._supplyservice.getsupplyAll().subscribe(
      res=> {
        console.log('Proveedores', res);
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
