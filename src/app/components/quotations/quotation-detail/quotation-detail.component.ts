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

@Component({
  selector: 'app-quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.css']
})
export class QuotationDetailComponent implements OnInit {
  // Para paginación
  public pageIndex:number = 0;
  public pageSize:number = 20;
  public currentPage = 0;
  public totalSize:number = 0;
  public array: any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  
  fecha:any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  requisicion_id : any = '';
  categoria_id : any = '';
  proyecto_id : any = 0;
  requisicion_Numero : any = '';
  cotizacion_Numero : any = '';
  loadfile : any  = '';
  buscar : any = '';
  public nombreArchivo : any = 'selecciona archivo';
  dataSourceShow : MatTableDataSource<requisitionModel>;
  dataExcel: any[];
  displayedColumns = ['select', 'cantidad', 'unidad_de_medida', 'descripcion'];

  projectInfo : any;
  requisicionId : any = 0;
  newProject: FormGroup;
  datasourceCategories : any[] = [];
  datasourcePorjects : any[] = [];
  datasourceRequisition : any[] = [];
  datasourceRequisitionDetail : any[] = [];

  constructor(
    public dialogRef: MatDialogRef<projectModel>
    , private _projectService : projectservice
    , private _categoryService : categoryservice
    , private _projectCategoryservice : projectCategoryservice
    , @Inject(MAT_DIALOG_DATA) public data,public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private _requisitionservice : requisitionservice
    // , private notificationService: NotificationService,
  ) { 
    this.projectInfo = data.arrayData;
    this.requisicionId = data.requisicionId;

    this.newProject = this.formBuilder.group({
      proyecto_id : new FormControl(''),
      categoria_id: new FormControl(''),
      requisicion_id: new FormControl(''),
      fecha: new FormControl(''),
      requisicion_Numero : new FormControl(''),
      cotizacion_Numero : new FormControl('')
  });
  }

  ngOnInit(): void {

    this.getProyectos();
    this.getEnabledCategories();
    if(this.requisicionId != 0){
        this.newProject.patchValue({
          proyecto_id : this.projectInfo["proyecto_id"],
          requisicion_id : '', // this.projectInfo["requisicion_id"] ,
          requisicion_Numero : this.projectInfo["codigo"] ,
          categoria_id : '', // this.projectInfo["categoria_id"],
          fecha : '', // this.projectInfo["fecha"]
          loadfile : ''
          
      })
      this.requisicion_Numero = this.projectInfo["codigo"];
      this.proyecto_id = this.projectInfo["proyecto_id"];
      this.requisicion_id = '' //this.projectInfo["requisicion_id"];
      this.categoria_id = this.projectInfo["categoria_id"];
      this.fecha = '', //this.projectInfo["fecha"];
      this.loadfile = ''
    }

  }

  getEnabledCategories(){
    // Actualiza registro NUEVO
    this._projectCategoryservice.getProjectCateogryById(1).subscribe(
      res=> {
        this.datasourceCategories = res;
        console.log('CATEGORIAS', res);
      },
      error => console.log("error consulta categorias",error)
    )
  }

  getProyectos(){
    // Obtiene proyectos
    this._projectService.getProjectAll().subscribe(
      res=> {
        this.datasourcePorjects = res;
        console.log('PROYECTOS', res);
      },
      error => console.log("error consulta proyectos",error)
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000});
  }

  proyectoSelected(){
    console.log('Selecciona categorias', this.proyecto_id);
    this.getCategories(this.proyecto_id);
  }

  categorySelected(){
    this.getrequisition();
  }

  getrequisition(){
    // Obtiene requisiciones 
    this._requisitionservice.getRequisitionById(this.newProject.controls["categoria_id"].value).subscribe(
      res=> {
        this.datasourceRequisition = [];
        this.datasourceRequisition.push(res);
          console.log('REQUISICIONES', this.datasourceRequisition);

          // Consulta detalle de requisición
          this.getRequisitionDetail();
      },
      error => console.log("error consulta requisiciones",error)
    )
  }

  getRequisitionDetail(){
    // Obtiene requisiciones 
    this._requisitionservice.getRequisitionById(this.newProject.controls["categoria_id"].value).subscribe(
      res=> {
        this.dataSourceShow = new MatTableDataSource(res);
          console.log('REQUISICIONES', this.datasourceRequisitionDetail);

      },
      error => console.log("error consulta requisiciones",error)
    )
  }

  getCategories(proyecto : any){
    // Obtiene categorias 
    this._projectCategoryservice.getProjectCateogryById(proyecto).subscribe(
      res=> {
        this.datasourceCategories = res;
        console.log('PROYECTOS - CATEGORIAS', res);
      },
      error => console.log("error consulta cateogorias",error)
    )
  }

  save(form, event){

    let arrayTodb : any;

    if(this.requisicionId == 0){
      arrayTodb = { proyecto_id : this.proyecto_id,
                  categoria_id : this.categoria_id,
                  codigo : this.requisicion_Numero,
                  fecha : moment(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD')
                };

      // INSERTA REQUISICION HDR
      this._requisitionservice.insertRequisition(arrayTodb).subscribe(
        res=> {
          console.log('Se inserto con éxito', res);

          // INSERTA REQUISICIONES DET
          this.insertRequisitionDet(res);
        },
        error => console.log("error alta de proyectos",error)
      )
    }
    else{
      arrayTodb = {proyecto_id : this.proyecto_id,
        categoria_id : this.categoria_id,
        requisicion_id : this.requisicion_id,
        fecha : moment(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD')
      };

        // Actualiza registro EDICION
        // this._projectService.updateProjects(arrayTodb).subscribe(
        // res=> {
        // console.log('Se edito con éxito', res);
        // },
        // error => console.log("error consulta regiones",error)
        // )
        // this.dialogRef.close();
    }
  }

insertRequisitionDet(requisicionId : any){

  console.log('para guardar')

  // Obtiene Requisicion Registrada
  let datasourceRequsition : MatTableDataSource<requisitionModel>
  let requisitionIdMaximo : any = "0";
  let arrayToDb : any;

      // this.UploadDataExcel.filteredData.forEach(element => {
      //   arrayToDb = {requisicioninterna_id : requisicionId
      //       , cantidad : element.cantidad
      //       , um : element.unidad_de_medida
      //       , descripcion : element.descripcion
      //   }

      //   // Inserta Proyecto Categoria
      //   this._requisitionservice.insertRequisitionDetail(arrayToDb).subscribe(
      //     res=> {
      //       console.log('REQUISICIONES DETALLE', arrayToDb);
      //     },
      //     error => console.log("error al insertar proyectos categorias",error)
      //   )
        
      //   arrayToDb = null;

      // });
}

  fechaControl(event){
    console.log('fecha', this.fecha);
  }

  cancel(event){
    this.dialogRef.close();
  }

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

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
  }

}
