import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { projectModel } from 'src/app/models/project.model';
import { projectservice } from '../../../services/projects/project.service';
import { categoryservice } from '../../../services/category/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { projectCategoryservice } from 'src/app/services/projectCtegory/projectCateogry.service';
import { requisitionModel } from 'src/app/models/requisition.model';
import { requisitionservice } from '../../../services/requisition/requisition.service';
import { requisitionModelDetail } from 'src/app/models/requisition.model.detail';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-requisition-detail',
  templateUrl: './requisition-detail.component.html',
  styleUrls: ['./requisition-detail.component.css']
})
export class RequisitionDetailComponent implements OnInit {
  // ===================
  // DECLARACIONES
  // ===================

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
  sku_Detalle : any = '';
  cantidad_Detalle : any = '';
  uom_Detalle : any = '';
  descripcion_Detalle : any = '';
  medida_Detalle : any = '';
  color_Detalle : any = '';

  loadfile : any  = '';
  buscar : any = '';
  public nombreArchivo : any = 'selecciona archivo';
  UploadDataExcel : MatTableDataSource<requisitionModelDetail>;
  UploadDataExcelManual : MatTableDataSource<requisitionModelDetail>;
  dataExcel: any[];
  // displayedColumns = ['SKU', 'cantidad', 'unidad_de_medida', 'descripcion'];
  displayedColumns = ['SKU', 'cantidad', 'unidad_de_medida', 'descripcion', 'medida', 'color', 'otras_Especificaciones'];

  projectInfo : any;
  requisicionId : any = 0;
  newProject: FormGroup;
  datasourceCategories : any[] = [];
  datasourcePorjects : any[] = [];
  datasourceRequisition : any;

  fo : string
  cargo : string
  no_pym : string

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
    this.projectInfo = data.arrayData;
    this.requisicionId = data.requisicionId;

    this.newProject = this.formBuilder.group({
      proyecto_id : new FormControl('', [Validators.required]),
      categoria_id: new FormControl('', [Validators.required]),
      requisicion_id: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      requisicion_Numero : new FormControl('', [Validators.required]),
      sku_Detalle : new FormControl(''),
      cantidad_Detalle : new FormControl(''),
      uom_Detalle : new FormControl(''),
      descripcion_Detalle : new FormControl(''),
      medida_Detalle : new FormControl(''),
      color_Detalle : new FormControl('')
  });
  }

// ===============
// PROCEDIMIENTOS
// ===============

  ngOnInit(): void {

    this.getProyectos();
    this.getEnabledCategories();
    
    this.newProject.controls["categoria_id"].setValue(this.projectInfo["codigo_proyectocategoria"]);
    
    if(this.requisicionId != 0){
        this.newProject.patchValue({
          proyecto_id : this.projectInfo["proyecto_id"],
          requisicion_id : '', // this.projectInfo["requisicion_id"] ,
          requisicion_Numero : this.projectInfo["codigo"] ,
          categoria_id : '', // this.projectInfo["categoria_id"],
          fecha : moment(new Date), //this.projectInfo["fecha"], // this.projectInfo["fecha"]
          loadfile : ''
      })
      this.requisicion_Numero = this.projectInfo["codigo"];
      // this.projectInfo.controls["proyecto_id"].setValue(77);
      this.proyecto_id = this.projectInfo["proyecto_id"];
      this.requisicion_id = '' //this.projectInfo["requisicion_id"];
      this.categoria_id = this.projectInfo["proyectocategoria_id"];
      // this.projectInfo.controls["categoria_id"].setValue('161');
      this.fecha = '', //this.projectInfo["fecha"];
      this.loadfile = ''

      this.getRequisitionDetail(this.requisicionId);
    }

  }

  onFileChange(event){
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    let extencionArchivo : string = '';
    let arrayExcel = [];

    if(this.UploadDataExcel != undefined){
      if(this.UploadDataExcel.filteredData.length > 0){
        this.UploadDataExcel.filteredData.forEach(element => {
          arrayExcel.push({ 
            requisition_Id : 0,
            SKU : element.SKU
            , cantidad : element.cantidad
            , um : element.um
            , descripcion : element.descripcion
            , medida : element.medida
            , color : element.color
            , otras_especificaciones : element.otras_especificaciones
          })
        });
      }else{
        this.UploadDataExcel = null;
      }
    }else{
      this.UploadDataExcel = null;
    }
         
    if (target.files.length !== 1) {
      throw new Error('No se pueden seleccionar multiples archivos');
    }

    this.nombreArchivo = (target.files.length > 0) ? target.files[0]["name"].substring(1,30) : " (archivo nuevo) ";
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    extencionArchivo = target.files[0].name.substring(target.files[0].name.length - 5,target.files[0].name.length)
    if(extencionArchivo == '.xlsx' || extencionArchivo.substring(extencionArchivo.length - 4, extencionArchivo.length) == 'xls'){
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
        let valido : boolean = true;

        // Validadores de campos
        let errorCantidad : boolean = false;
        let errorUoM : boolean = false;
        let errorDescripcion : boolean = false;
        let errorSKU : boolean = false;
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

        if(element.SKU == '') {valido = false; errorSKU = true}
        if(element.CANTIDAD_REQUERIDA == '') {valido = false; errorCantidad = true;}
        if(element.UNIDAD.toUpperCase() == '') {valido = false; errorUoM = true;}
        if(element.DESCRIPCION.toUpperCase() == '') {valido = false; errorDescripcion = true;}

        contador++;
        DescripcionAnt = Descripcion;

        if(valido == false){
          arrayErrores.push({ cantidad : element.CANTIDAD_REQUERIDA, 
            unidad_de_medida : element.UNIDAD, 
            descripcion : element.DESCRIPCION.toUpperCase()
           })
        }else{
          arrayExcel.push({ 
            requisition_Id : 0,
            SKU : element.SKU,
            cantidad : element.CANTIDAD_REQUERIDA, 
            um : element.UNIDAD,
            descripcion : element.DESCRIPCION,
            medida : element.MEDIDA,
            color : element.COLOR,
            otras_especificaciones : element.OTRAS_ESPECIFICACIONES
           })
        }
      });

      if(arrayErrores.length > 0){
        this.openSnackBar('Los registros contienen datos incorrectos', '');
        this.dataExcel = null;
        return;
      }

      this.UploadDataExcel = new MatTableDataSource(arrayExcel);

      };
    }
    else{
      this.openSnackBar('Los registros contienen datos incorrectos', '');
      this.deleteUploadFile(event);
    }
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
    this.getCategories(this.newProject.controls["proyecto_id"].value);
  }

  categorySelected(){
    // Obtenemos requisiciones existentes y generamos nuevo numero para la requisición
    let proyectoCategoria_id : any = this.newProject.controls["categoria_id"].value
    let codigo_categoria : any = 0;
    let arrayProyectoCategoria : any;

    arrayProyectoCategoria = this.datasourceCategories.filter(e => e.proyectocategoria_id == proyectoCategoria_id);
    codigo_categoria = arrayProyectoCategoria[0]["codigo_proyectocategoria"]
    this.getrequisition(codigo_categoria);
  }

  validaCamposRequeridos() : boolean{
    let valido : boolean = true;
    valido = (this.newProject.get('proyecto_id').status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("categoria_id").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("requisicion_Numero").status == 'INVALID') ? false : valido;

    return valido;
  }

  save(form, event){

    let arrayTodb : any;

    if(this.validaCamposRequeridos() == false){
      this.openSnackBar('debe capturar los campos requeridos', 'success');
      return;
    }

    if(this.requisicionId == 0){
      arrayTodb = {
                  proyectocategoria_id : this.newProject.controls["categoria_id"].value, // this.categoria_id,
                  codigo : this.newProject.controls["requisicion_Numero"].value, // this.requisicion_Numero,
                  fecha : moment(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD') //,
                };

      // INSERTA REQUISICION HDR
      this.insertRequisition(arrayTodb)
    }
    else{
      arrayTodb = {proyecto_id : this.newProject.controls["requisicion_Numero"].value, // this.proyecto_id,
        proyectocategoria_id : this.newProject.controls["categoria_id"].value, // this.categoria_id,
        requisicion_id : this.requisicion_id,
        fecha : moment(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD')
      };

        // Actualiza registro EDICION
        this.updateRequisition(arrayTodb);
    }
    this.dialogRef.close();
  }

  add(form, event){
    
    let arrayExcel : any = [];

    if(this.UploadDataExcel != undefined){
      if(this.UploadDataExcel.filteredData.length > 0){
        this.UploadDataExcel.filteredData.forEach(element => {
          arrayExcel.push({ 
            requisition_Id : 0,
            SKU : element.SKU
            , cantidad : element.cantidad
            , um : element.um
            , descripcion : element.descripcion
            , medida : element.medida
            , color : element.color
            , otras_especificaciones : element.otras_especificaciones
          })
        });
      }else{
        arrayExcel = [];
      }
    }else{
      arrayExcel = [];
    }

    arrayExcel.push({ 
      requisition_Id : 0,
      SKU : this.newProject.controls["sku_Detalle"].value
      , cantidad : this.newProject.controls["cantidad_Detalle"].value
      , um : this.newProject.controls["uom_Detalle"].value
      , descripcion : this.newProject.controls["descripcion_Detalle"].value
      , medida : this.newProject.controls["medida_Detalle"].value
      , color : this.newProject.controls["color_Detalle"].value
      , otras_especificaciones : ''
     })

    this.UploadDataExcel = null;
     this.UploadDataExcel = new MatTableDataSource(arrayExcel);
  }

  clean(event){
    this.UploadDataExcel = null;
  }

  fechaInicial(event){
    console.log('fecha', this.fecha);
  }

  cancel(event){
    this.dialogRef.close();
  }

  // ====================
  // UTILERIAS
  // ====================

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
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

  // ====================
  // LLAMADAS A SERVICIOS
  // ====================

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

  getrequisition(codigo_categoria : any){

    let categoria_id : any = this.newProject.controls["categoria_id"].value
    let codigo_requisicion : any = 0;
    let arrayRequisition : any;
    let arrayCodigoCategoria : any;
    
    // Proyectos registrados
    this._requisitionservice.getRequisitionAll().subscribe(
      res=> {
        this.datasourceRequisition = new MatTableDataSource(res);

        if(this.datasourceRequisition.filteredData.length == 0){
          codigo_requisicion = codigo_categoria + '-1'; 
        }else{
          // Obtener requisicion en la que se mas alta y determinar cual sigue
          arrayRequisition = this.datasourceRequisition.filteredData.filter(e => e.proyectocategoria_id == categoria_id);
          if(arrayRequisition.length > 0){
            let cantidadRequisition = arrayRequisition.length
            codigo_requisicion = codigo_categoria + '-' + (cantidadRequisition + 1)
          }else{
            // obtener codigo_categoria
            arrayCodigoCategoria = 1;
            codigo_requisicion = codigo_categoria + '-1'; 
          }

        }

        // this.newProject.controls["requisicion_Numero"].setValue = codigo_categoria + codigo_requisicion;
        this.requisicion_Numero = codigo_requisicion;
        this.newProject.controls["requisicion_Numero"].setValue(codigo_requisicion);
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

  insertRequisition(arrayTodb : any){
    this._requisitionservice.insertRequisition(arrayTodb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);

        // INSERTA REQUISICIONES DET
        this.insertRequisitionDet(res);
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  getRequisitionDetail(arrayTodb){

    let arrayRequsitionDetail : any;
    let arrayRequsitionToTable : any[] = []; //MatTableDataSource<requisitionModelDetail>;

    this._requisitionservice.getRequisitionDetail(arrayTodb).subscribe(
      res=> {
        arrayRequsitionDetail = res;

        arrayRequsitionDetail.forEach(element => {
          arrayRequsitionToTable.push({requisition_Id: 0, SKU : element.sku, cantidad : element.cantidad, um : element.unidad_medida, descripcion : element.descripcion, medida : element.medida})
        });

        this.UploadDataExcel = new MatTableDataSource(arrayRequsitionToTable);
        console.log('Se obtiene detalle de requisición', res);
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  updateRequisition(arrayTodb : any){
    console.log('ACTUALIZA REQUISICION');
        // this._projectService.updateProjects(arrayTodb).subscribe(
        // res=> {
        // console.log('Se edito con éxito', res);
        // },
        // error => console.log("error consulta regiones",error)
        // )
        // this.dialogRef.close();
  }

  insertRequisitionDet(requisicionId : any){
    // Obtiene Requisicion Registrada
    let datasourceRequsition : MatTableDataSource<requisitionModel>
    let requisitionIdMaximo : any = "0";
    let arrayToDb : any;

      this.UploadDataExcel.filteredData.forEach(element => {
        arrayToDb = {requisicioninternadetalle_id : 0
            , requisicioninterna_id : requisicionId
            , cantidad : element.cantidad
            , sku : element.SKU
            , codigo_requisicioninterna : ''
            , unidad_medida : element.um
            , descripcion : element.descripcion
            , existencia_almacen : 0
            , cantidad_comprar : element.cantidad
            , medida : (element.medida != undefined) ? element.medida : ''
            , color : (element.color != undefined) ? element.color : ''
            , otras_especificaciones : (element.otras_especificaciones != undefined) ? element.otras_especificaciones : ''
            , estado : true
            , cotizado : false
        }

        console.log('DETALLE DETALLE DETALLE', arrayToDb);

        // Inserta Proyecto Categoria
        this._requisitionservice.insertRequisitionDetail(arrayToDb).subscribe(
          res=> {
            console.log('REQUISICIONES DETALLE', res);
            this.openSnackBar('Se genero el la requisición exitosamente', 'success');
            // this.dialogRef.close();
          },
          error => console.log("error al insertar proyectos categorias",error)
        )
        
        arrayToDb = null;

      });
  }

}
