import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { invoiceModel } from 'src/app/models/invoice.model';
import { invoiceservice } from 'src/app/services/invoice.service';
import { InvoiceDetailComponent } from 'src/app/components/invoice/invoice-detail/invoice-detail.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

// =================
// DECLARACIONES
// =================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<invoiceModel>

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['proyecto_id', 'proyecto', 'cliente', 'total_odc_mxn', 'total_odc_usd', 'total_factura_mxn', 'total_factura_usd', 'presupuesto', 'detail'];

  constructor(public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _invoiceservice : invoiceservice) { }

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
                                proyecto : element.proyecto_id
                              , cliente : element.cliente
                              , total_odc_mxn : element.total_odc_mxn
                              , total_odc_usd : element.total_odc_usd
                              , total_factura_mxn : element.total_factura_mxn
                              , total_factura_usd : element.total_factura_usd
                              , presupuesto : element.presupuesto
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

    const dialogRef = this.dialog.open(InvoiceDetailComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('proveedores');
      window.location.reload();
    });
  }

  edit(element, event){
    console.log('Editar un proveedores', element);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: element.proyecto,
      title: 'FACTURAS',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(InvoiceDetailComponent, dialogConfig);

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
    this._invoiceservice.getinvoiceAll().subscribe(
      res=> {
        console.log('Proveedores', res);

        // Ordenado de arreglo
        arraySort = res.sort(function (a, b) {
          if (a.proyecto < b.proyecto) {
            return 1;
          }
          if (a.proyecto > b.proyecto) {
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

}
