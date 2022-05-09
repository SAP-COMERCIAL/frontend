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
import { SupplierUserComponent } from '../../components/supplier-user/supplier-user.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

export class SupplierComponent implements OnInit {

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

  displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estatus', 'edit', 'users'];

  constructor(public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice) { }

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

  newsupplier(evetn){
    console.log('Alta de proveedores');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'PROVEEDOR',
      arrayData : null,
      proveedorId: 0,
      estadoPantalla: 'New'
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SupplierDetailComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('proveedores');
      window.location.reload();
    });
  }

  edit(element, event){
    console.log('Editar un proveedores', element);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'PROVEEDOR',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SupplierDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
    });
  }

  users(element, event){
    console.log('Editar un proveedores', element);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'USUARIOS',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '500px';
    dialogConfig.height = '500px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SupplierUserComponent, dialogConfig);

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
        
        this.dataSourceShow = new MatTableDataSource(arraySort);
        this.array = res;
        this.totalSize = this.array.length;
        
        this.iterator();
        this.dataSourceShow.sort = this.sort;

        console.log('sdsdsdsdsd', this.dataSourceShow)
        
      },
      error => console.log("error consulta regiones",error)
    )
  }

}
