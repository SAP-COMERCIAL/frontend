import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { RepseSupplierReviewDetailComponent } from '../../../components/repse-supplier-review-detail/repse-supplier-review-detail.component';
import { ThrowStmt } from '@angular/compiler';
import { RepseReviewAproveComponent } from '../repse-review-aprove/repse-review-aprove.component';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';

@Component({
  selector: 'app-repse-review-general',
  templateUrl: './repse-review-general.component.html',
  styleUrls: ['./repse-review-general.component.css']
})
export class RepseReviewGeneralComponent implements OnInit {

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

  displayedColumns = ['supplier_id', 'documento', 'estatus', 'ver', 'revision'];

  constructor(public dialogRef: MatDialogRef<supplierModel>
    , public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice
    , private _UploadFileService : UploadFileService) { }

  // =================
  // PROCEDIMIENTOS
  // =================

  ngOnInit(): void {
    this.getsupplierDocuments();
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

  review(element, event){
    // AUTORIZA O RECHAZA
    console.log('Editar un proveedores', element.proveedorId);

    const dialogConfig = new MatDialogConfig();

    console.log('Proveedores', element.proveedorId)
    console.log('data', element);
    dialogConfig.data = {
      id: 1,
      title: 'APROBAR/DENEGAR ARCHIVO',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '550px';
    dialogConfig.height = '300px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(RepseReviewAproveComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
    });
  }

  filtrar(event : Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
  }

  save(event){

  }

  cancel(event){
    this.dialogRef.close();
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

  view(form, event){
    console.log('SE MUESTRA LA IMAGEN O EL ARCHIVO', form);
    this.getImage();
  }


  // =================
  // SERVICIOS
  // =================

  getsupplierDocuments(){

    let arraySupplier: any[] = [];

    arraySupplier.push({supplier_id : 1, documento : 'Razón Social', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Dirección', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'RFC', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'Contacto', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Ciudad', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Estado', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Objetivo Social', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Tipo Persona', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Teléfono contacto', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Correo electrónico', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Acta constitutiva', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'INE', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'Alta IMSS', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'Alta Infonavit', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'Altta SAT', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'Estado de cuenta', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : 'Estado financiero', estatus : 'Por Revisar', aprobacion : true}
                        , {supplier_id : 1, documento : '¿Es usted prestador de servicios especializados?', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Contrato', estatus : 'Por Revisar', aprobacion : false}
                        , {supplier_id : 1, documento : 'Registro Patronal de proveedores', estatus : 'Por Revisar', aprobacion : true}
                      )
                    
    this.dataSourceShow = new MatTableDataSource(arraySupplier);

    // Proyectos registrados
    // this._supplyservice.getsupplyAll().subscribe(
    //   res=> {
    //     console.log('Proveedores', res);
    //     this.dataSourceShow = new MatTableDataSource(res);
    //     this.array = res;
    //     this.totalSize = this.array.length;
        
    //     this.iterator();
    //     this.dataSourceShow.sort = this.sort;
        
    //   },
    //   error => console.log("error consulta regiones",error)
    // )


  }

  fileDownload : any;

  getImage(){
    this._UploadFileService.getFiles('direccion_dos.PNG' ,'generales').then(urlImagen => {
      console.log(urlImagen);
      this.fileDownload = urlImagen;
      window.open(urlImagen.toString());
    });
  }

}
