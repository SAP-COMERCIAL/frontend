import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { invoiceservice } from 'src/app/services/invoice.service';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { InvoiceDetailCaptureComponent } from '../invoice-detail-capture/invoice-detail-capture.component'
import { invoiceDetailModel } from 'src/app/models/invoice-detail.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

// =================
// DECLARACIONES
// =================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<invoiceDetailModel>
pageInfo : any;
po_Id : number;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['odc_id', 'odc_codigo', 'proveedor', 'total_odc', 'moneda', 'estatus', 'add'];

  constructor(public dialogRef: MatDialogRef<invoiceDetailModel>
    , public dialog: MatDialog
    , @Inject(MAT_DIALOG_DATA) public data
    , private _excelService : ExcelServiceService
    , private _invoiceservice : invoiceservice)
    { 
      this.pageInfo = data.arrayData;
      this.po_Id = data.id;
    }

  // =================
  // PROCEDIMIENTOS
  // =================
  ngOnInit(): void {
    this.getinvoiceDetailByProjectId(this.pageInfo.proyecto_id);
  }

  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({
                                odc_Id : this.po_Id
                              , odc_codigo : element.odc_codigo
                              , proveedor : element.proveedor
                              , monto : element.total_odc
                              , moneda : element.moneda
                              , estatus : element.estatus
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proveedores');  
  }

  add(element, event){
    console.log('Editar un proveedores', element);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: element.po_id,
      proyecto_id : this.pageInfo.proyecto_id,
      title: 'FACTURAS',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(InvoiceDetailCaptureComponent, dialogConfig);

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

  cancel(event){
    this.dialogRef.close();
  }

  // =================
  // SERVICIOS
  // =================

  getinvoiceDetailByProjectId(Porject_id : number){
    let arraySort: any;

    this._invoiceservice.getinvoiceDetailByProjectId(Porject_id).subscribe(
      res=> {
        console.log('Facturas', res);
        arraySort = res
        // Ordenado de arreglo
        // arraySort = res.sort(function (a, b) {
        //   if (a.odc_id < b.odc_id) {
        //     return 1;
        //   }
        //   if (a.odc_id > b.odc_id) {
        //     return -1;
        //   }
        //   return 0;
        // });
        
        this.dataSourceShow = new MatTableDataSource(arraySort);
        this.array = res;
        this.totalSize = this.array.length;
        
        // this.iterator();
        this.dataSourceShow.sort = this.sort;
        
        console.log('FACTURAS OBTENIDAS', this.dataSourceShow);
      },
      error => console.log("error consulta regiones",error)
    )
  }

}
