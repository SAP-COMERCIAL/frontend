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
// import { NotificationService } from '../../../services/common/notification.service';

@Component({
  selector: 'app-requisition-detail',
  templateUrl: './requisition-detail.component.html',
  styleUrls: ['./requisition-detail.component.css']
})
export class RequisitionDetailComponent implements OnInit {
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
  requisicion_Numero : any = ''
  loadfile : any  = '';
  buscar : any = '';
  public nombreArchivo : any = 'selecciona archivo';
  UploadDataExcel : MatTableDataSource<requisitionModelDetail>;
  dataExcel: any[];
  displayedColumns = ['cantidad', 'unidad_de_medida', 'descripcion'];

  projectInfo : any;
  requisicionId : any = 0;
  newProject: FormGroup;
  datasourceCategories : any[] = [];
  datasourcePorjects : any[] = [];
  datasourceRequisition : any;

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
      requisicion_Numero : new FormControl('')
      // loadFile: new FormControl(''),
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

  onFileChange(event){
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    let extencionArchivo : string = '';

    this.UploadDataExcel = null;

    if (target.files.length !== 1) {
      throw new Error('No se pueden seleccionar multiples archivos');
    }

    this.nombreArchivo = (target.files.length > 0) ? target.files[0]["name"].substring(1,30) : " (archivo nuevo) ";
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    extencionArchivo = target.files[0].name.substring(target.files[0].name.length - 5,target.files[0].name.length)
    if(extencionArchivo == '.xlsx' || extencionArchivo.substring(extencionArchivo.length - 4, extencionArchivo.length) == 'xls'){
      console.log('AQUI ESTAN LAS EXTENCIONES DE EXCEL')
      reader.onload = (e: any) => {
        /* create workbook */
  
        const binarystr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });
  
        /* selected the first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        const data = XLSX.utils.sheet_to_json(ws);
        this.dataExcel = this.validate(data);
        this.dataExcel = data;

        let arrayErrores = [];
        let arrayExcel = [];
        let valido : boolean = true;

        // Validadores de campos
        let errorCantidad : boolean = false;
        let errorUoM : boolean = false;
        let errorDescripcion : boolean = false;
        let DescripcionAnt : string = '';
        let Descripcion : string = '';

        // Ordena los descuentos por cr + produto + plataforma
        this.dataExcel.sort(function (a, b) {
          if (a.DESCRIPCION > b.DESCRIPCION) {
            return 1;
          }
          if (a.DESCRIPCION < b.DESCRIPCION) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

        DescripcionAnt = this.dataExcel[0]["DESCRIPCION"].toUpperCase();

        // Validamos que los crs del excel vs las existentes en el ctálogo
      let contador : number = 0;
      this.dataExcel.forEach(element => {
        // Reinicia valores
        valido = true;
        errorDescripcion = false;

        Descripcion = element.DESCRIPCION.toUpperCase()

        if(element.CANTIDAD == '') {valido = false; errorCantidad = true;}
        if(element.UNIDAD_DE_MEDIDA.toUpperCase() == '') {valido = false; errorUoM = true;}
        if(element.DESCRIPCION.toUpperCase() == '') {valido = false; errorDescripcion = true;}

        contador++;
        DescripcionAnt = Descripcion;

        if(valido == false){
          arrayErrores.push({ cantidad : element.CANTIDAD, 
            unidad_De_Medida : element.UNIDAD_DE_MEDIDA, 
            descripcion : element.DESCRIPCION.toUpperCase()
           })
        }else{
          arrayExcel.push({ 
            requisition_Id : 0,
            cantidad : element.CANTIDAD, 
            unidad_de_medida : element.UNIDAD_DE_MEDIDA,
            descripcion : element.DESCRIPCION
           })
        }
      });

      if(arrayErrores.length > 0){
        this.openSnackBar('Los registros contienen datos incorrectos', '');

        // this.notificationService.openNotification(AppConstants.defaultNotificationWarningTitle, 'Los registros contienen estaciónes, productos o plataformas no validos', 'warn');
        this.dataExcel = null;
        // this.openErrorDialog(arrayErroresEstacion);
        return;
      }

      this.UploadDataExcel = new MatTableDataSource(arrayExcel);

      };
    }
    else{
      this.openSnackBar('Los registros contienen datos incorrectos', '');
      // this.notificationService.openNotification(AppConstants.defaultNotificationWarningTitle, 'No es un archivo de excel válido', 'warn');
      this.deleteUploadFile(event);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000});
  }

  validate(data : any)
  {
    // Valida que todos los datos esten completos
    return data
  }

  deleteUploadFile(event: any){
    this.nombreArchivo = " (archivo nuevo) ";
    this.UploadDataExcel = null;
  }

  proyectoSelected(){
    console.log('Selecciona categorias', this.proyecto_id);
    this.getCategories(this.proyecto_id);
  }

  categorySelected(){
    // Obtenemos requisiciones existentes y generamos nuevo numero para la requisición
    let proyectoCategoria_id : any = this.newProject.controls["categoria_id"].value
    let codigo_categoria : any = 0;
    let arrayProyectoCategoria : any;

    arrayProyectoCategoria = this.datasourceCategories.filter(e => e.proyectocategoria_id == proyectoCategoria_id);
    codigo_categoria = arrayProyectoCategoria[0]["codigo_proyectocategoria"]

    console.log('Selecciona requiscion, buscar en this.datasourceCategories', codigo_categoria);


    this.getrequisition(codigo_categoria);
  }

  getrequisition(codigo_categoria : any){

    let categoria_id : any = this.newProject.controls["categoria_id"].value
    let codigo_requisicion : any = 0;
    let arrayRequisition : any;
    let arrayCodigoCategoria : any;
    
    // Proyectos registrados
    this._requisitionservice.getRequisitionAll().subscribe(
      res=> {
        console.log('Requisiciones', res);
        this.datasourceRequisition = new MatTableDataSource(res);

        if(this.datasourceRequisition.filteredData.length == 0){
          codigo_requisicion = codigo_categoria + '-1'; 
          console.log('Primer codigo requsicion', codigo_requisicion);
        }else{
          // Obtener requisicion en la que se mas alta y determinar cual sigue
          arrayRequisition = this.datasourceRequisition.filteredData.filter(e => e.categoria_id == categoria_id);

          console.log('No hay requisiciones, nuevo valor', arrayRequisition);

          if(arrayRequisition.length > 0){
            // codigo_categoria = arrayRequisition[0]["codigo_categoria"]
            arrayCodigoCategoria = (this.datasourceRequisition.filteredData.filter(e => e.codigo_categoria == codigo_categoria)).length
            codigo_requisicion = codigo_categoria + '-' + (arrayCodigoCategoria + 1)
          }else{
            // obtener codigo_categoria
            // codigo_categoria = '1900-PIP'
            arrayCodigoCategoria = 1;
            codigo_requisicion = codigo_categoria + '-1'; 
          }

        }
        
        

        // this.newProject.controls["requisicion_Numero"].setValue = codigo_categoria + codigo_requisicion;
        this.requisicion_Numero = codigo_requisicion;


        console.log('aqui esta', this.datasourceRequisition.filteredData.filter(e => e.codigo_categoria == codigo_categoria))
        console.log('aqui esta', categoria_id)
        // console.log('aqui esta', this.datasourceRequisition.filteredData.filter(e => e.codigo_categoria == categoria_id))
        // console.log('aqui esta', this.datasourceRequisition.filteredData.find(e => e.codigo_categoria == this.newProject["codigo_categoria"].value))
      },
      error => console.log("error consulta regiones",error)
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

      this.UploadDataExcel.filteredData.forEach(element => {
        arrayToDb = {requisicioninterna_id : requisicionId
            , cantidad : element.cantidad
            , um : element.unidad_de_medida
            , descripcion : element.descripcion
        }

        // Inserta Proyecto Categoria
        this._requisitionservice.insertRequisitionDetail(arrayToDb).subscribe(
          res=> {
            console.log('REQUISICIONES DETALLE', arrayToDb);
          },
          error => console.log("error al insertar proyectos categorias",error)
        )
        
        arrayToDb = null;

      });


}

  fechaInicial(event){
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
    this.UploadDataExcel = new MatTableDataSource(part);
    this.UploadDataExcel.sort = this.sort;
    this.UploadDataExcel.paginator = this.paginator;
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.UploadDataExcel.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
  }

}
