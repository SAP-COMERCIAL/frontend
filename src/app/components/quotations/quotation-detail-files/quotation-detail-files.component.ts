import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { from } from 'rxjs';
import { projectModel } from 'src/app/models/project.model';
import { projectservice } from '../../../services/projects/project.service';
import { categoryModel } from '../../../models/category.model';
import { categoryservice } from '../../../services/category/category.service';
import { ProjectCaptureComponent } from 'src/app/pages/projects/project-capture/project-capture.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { projectCategoryModel } from 'src/app/models/projectCategory.model';
import { projectCategoryservice } from 'src/app/services/projectCtegory/projectCateogry.service';
import { requisitionModel } from 'src/app/models/requisition.model';
import { requisitionservice } from '../../../services/requisition/requisition.service';
import { requisitionModelDetail } from 'src/app/models/requisition.model.detail';
import { AppConstants } from '../../../shared/app.constants';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'rxjs-compat/operator/filter';
import { quotationDetailModel } from 'src/app/models/quotation-detail.model';
import { quotationDetailFileModel } from 'src/app/models/quotation-detail-file.model';
import { providerModel } from 'src/app/models/provider.model';

@Component({
  selector: 'app-quotation-detail-files',
  templateUrl: './quotation-detail-files.component.html',
  styleUrls: ['./quotation-detail-files.component.css']
})
export class QuotationDetailFilesComponent implements OnInit {

  // =========================
  // DECLARACIONES
  // =========================

  // Para paginación
  public pageIndex:number = 0;
  public pageSize:number = 20;
  public currentPage = 0;
  public totalSize:number = 0;
  public array: any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  QuotationInfo : any;
  newProject: FormGroup;
  displayedColumns = ['SKU', 'file'];

  // NgModels
  proveedor_id : any = 0;
  UploadDataQuotation : MatTableDataSource<quotationDetailFileModel>;
  datasourcePoveedores : any[] = [];
  public nombreArchivo : any = 'selecciona archivo';
  dataExcel: any[];
  dataShowUploadFile : MatTableDataSource<quotationDetailFileModel>;
  
  // NGModels
  cotizacionId : any = 0;

  constructor(
    public dialogRef: MatDialogRef<projectModel>
    , private _projectService : projectservice
    , private _categoryService : categoryservice
    , private _projectCategoryservice : projectCategoryservice
    , @Inject(MAT_DIALOG_DATA) public data
    , public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private _requisitionservice : requisitionservice
    // , private notificationService: NotificationService,
  ) { 
    this.QuotationInfo = data.arrayData;
    this.cotizacionId = data.cotizacionId;

    this.newProject = this.formBuilder.group({
      cotizacion_Id : new FormControl(''),
      proveedor_id : new FormControl('')
  });
  }

  ngOnInit(): void {
    this.cotizacionId = this.QuotationInfo["cotizacion_id"];
    console.log('cotizacion aqui', this.QuotationInfo["cotizacion_id"]);
    this.getProveedores();
  }

  onFileChange(event){
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    let extencionArchivo : string = '';

    this.UploadDataQuotation = null;

    if (target.files.length !== 1) {
      throw new Error('No se pueden seleccionar multiples archivos');
    }

    this.nombreArchivo = (target.files.length > 0) ? target.files[0]["name"].substring(1,30) : " (archivo nuevo) ";
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    extencionArchivo = target.files[0].name.substring(target.files[0].name.length - 5,target.files[0].name.length)
    
      reader.onload = (e: any) => {
        /* create workbook */
  
        const binarystr: string = e.target.result;
 
      };
  }

  // PROCEDIMIENTO
  validate(data : any)
  {
    // Valida que todos los datos esten completos
    return data
  }

  deleteUploadFile(event: any){
    this.nombreArchivo = " (archivo nuevo) ";
    this.UploadDataQuotation = null;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000});
  }

  save(form, event){

  }

  uploadFile(form, event){

    let dataUploadFile : any[] = [];

    dataUploadFile.push({proveedor_id : this.proveedor_id, file : this.nombreArchivo });

    this.dataShowUploadFile = new MatTableDataSource(dataUploadFile);

    this.openSnackBar('Se subió el archivo correctamente  ' + this.nombreArchivo, '');
  }

  cancel(form, event){
    this.dialogRef.close();
  }

  // =====================
  // CONSILTA DE SERVICIOS
  // =====================

  getProveedores(){

    let arrayProvider : any [];

    arrayProvider = [];
    arrayProvider.push({proveedor_id : 1, proveedor_nombre : 'CABLES MONTERREY SA DE CV'},
                    {proveedor_id : 2, proveedor_nombre : 'VENTA DE CABLEADO SA'}
                    )

    this.datasourcePoveedores = arrayProvider;

    console.log(this.datasourcePoveedores);
  }
}
