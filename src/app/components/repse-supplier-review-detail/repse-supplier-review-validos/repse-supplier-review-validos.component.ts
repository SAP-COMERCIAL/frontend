import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { RepseSupplierReviewDetailComponent } from '../../../components/repse-supplier-review-detail/repse-supplier-review-detail.component';
import { ThrowStmt } from '@angular/compiler';
import { RepseReviewAproveComponent } from '../repse-review-aprove/repse-review-aprove.component';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { supplierActivityModel } from 'src/app/models/supplier-activity.model';
import { SelectionModel } from '@angular/cdk/collections';
import { yearsPerPage } from '@angular/material/datepicker';

@Component({
  selector: 'app-repse-supplier-review-validos',
  templateUrl: './repse-supplier-review-validos.component.html',
  styleUrls: ['./repse-supplier-review-validos.component.css']
})
export class RepseSupplierReviewValidosComponent implements OnInit {

 // =================
// DECLARACIONES
// =================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<supplierActivityModel>
pageInfo : any;
providerId : number;
arraySupplierGlobal : any = [];
dataSourceSupplier : any;
selection = new SelectionModel<supplierActivityModel>(true, []);
anio : any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['select', 'is_required', 'activity_id', 'provider_id', 'year', 'month'];

  public newForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<supplierModel>
    , public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice
    , private _UploadFileService : UploadFileService
    , @Inject(MAT_DIALOG_DATA) public data
    , private formBuilder: FormBuilder) { 

      this.pageInfo = data.arrayData;
      // this.providerId = data.estadoPantalla;

      this.newForm = this.formBuilder.group({
        anio: new FormControl('', [Validators.required])
      })

    }

  // =================
  // PROCEDIMIENTOS
  // =================

  ngOnInit(): void {
    this.providerId = this.pageInfo.proveedorid;
  }

  filtrar(event : Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
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

  view(element, event){
    window.open(element.url);
    // this.getImage();
  }


  search(form, event){
    console.log('SEARCHIG', form)
    this.getsupplierActivity()
  }

  ActivarDesactivar(activity_id : number, provider_id : number, is_required : boolean, year : number, month : number){
    // this.loading = true;
    let arrayToDb : any = null;
    let requiredNumber : number;

    requiredNumber = (is_required == true) ? 1 : 0;


    arrayToDb = {activity_id : activity_id, provider_id : this.providerId , year : year, month : month, is_required : requiredNumber}
    console.warn('ACTIVIDAD A GUARDAR', arrayToDb);

    if(activity_id == 0){
      // INSERTA
      console.log('INSERTA', activity_id);
      this._supplyservice.insertsupplyActivity(arrayToDb).subscribe(
        res=> {
          console.log('Se cargo exitosamente');
          this.getsupplierActivity();
        },
        error => console.log("error consulta afiliaciones",error)
      )
    }else{
      // ACTUALIZA
      console.log('ACTUALIZA', activity_id);
       this._supplyservice.updatesupplyActivity(arrayToDb).subscribe(
        res=> {
          console.log('Se cargo exitosamente');
          this.getsupplierActivity();
        },
        error => console.log("error consulta afiliaciones",error)
      )
    }

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceShow.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSourceShow.data.forEach(row => this.selection.select(row));
  }

  // =================
  // SERVICIOS
  // =================

  getsupplierActivity(){

    let arrayMeses : any;
    let arrayTabla : any = [];
    let year : number = this.anio; //this.newForm.controls['anio'].value;
    let required : number = 0
    this.dataSourceShow = null;
    let activityLoad : number = 0;

      // Proyectos registrados
      this._supplyservice.getsupplyActivityByYear(this.providerId, year).subscribe(
        prov=> {
          arrayMeses = prov;
          // this.dataSourceShow = new MatTableDataSource(prov);

          for(let i=1; i <= 12; i++)
          {
            if(arrayMeses.filter(e => e.year == year && e.month == i).length > 0){
              required = arrayMeses.filter(e => e.year == year && e.month == i)[0]['is_required']
              activityLoad = arrayMeses.filter(e => e.year == year && e.month == i)[0]['activity_id']
            }else{
              required = 0
              activityLoad = 0;
            }
            
            arrayTabla.push({is_required : required
              , activity_id : activityLoad
              , year : year
              , month : i})

          }

          this.dataSourceShow = new MatTableDataSource(arrayTabla);

              console.log('AQUI ESTA EL PROVEEDOR', arrayTabla);
              
      },
      error => console.log("error consulta proveedores",error)
    )
  }

}
