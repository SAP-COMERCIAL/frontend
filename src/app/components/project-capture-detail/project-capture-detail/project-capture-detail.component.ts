import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { projectModel } from 'src/app/models/project.model';
import { projectservice } from '../../../services/projects/project.service';
import { categoryservice } from '../../../services/category/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { projectCategoryservice } from 'src/app/services/projectCtegory/projectCateogry.service';
import { CustomerDetailComponent } from '../../customer-detail/customer-detail.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { customerservice } from '../../../services/customer.service';

@Component({
  selector: 'app-project-capture-detail',
  templateUrl: './project-capture-detail.component.html',
  styleUrls: ['./project-capture-detail.component.css']
})
export class ProjectCaptureDetailComponent implements OnInit {
	
// =========================
// DECLARACIONES
// =========================

  fecha_inicial_proyecto:any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  fecha_final_proyecto:any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  nombre_proyecto : any = ''  
  cliente : any = '1';
  presupuesto_proyecto : any = 0;
  responsable_proyecto : any = '';
  centro_de_costo_proyecto : any = '1';
  almacen : any = '1';
  codigo_proyecto : any = '';
  proeycto_id_mayor : number = 0;
  proeycto_numero_mayor : number = 0;
  myInput:any;

  enviaANombre : string;
  enviaADireccion : any;
  enviaACd : any;
  enviaAEstado : any;
  enviaARequisitor : any;
  enviaATelefono : any;
  destinoNombre : any;
  destinoDireccion : any;
  destinoCiudad : any;
  destinoEstado : any;
  destinoCP : any;
  destinoTelefono : any;
  destinoRequisitor : any;

  numerotxt : any;
  nombretxt : any;
  clientecbo : any;  
  presupuestotxt : any;
  responsabletxt : any;
  fechaInicialtxt : any;
  fechaFinaltxt : any;
  centroDeCostoscbo : any;
  almacencbo : any;
  projectInfo : any;
  projectId : any;
  public newProject: FormGroup;
  datasourceCategories : any[] = [];
  datasourceProyects : any[] = [];
  datasourceCustomers : any;
  public presupuestoFormato: any = 0;
  public presupuestoFormatoLable: any = 0;

   constructor(
    public dialogRef: MatDialogRef<projectModel>
    , private _projectService : projectservice
    , private _categoryService : categoryservice
    , private _projectCategoryservice : projectCategoryservice
    , private _customerservice : customerservice
    , @Inject(MAT_DIALOG_DATA) public data,public _snackBar: MatSnackBar
    , public dialog: MatDialog
    , private formBuilder: FormBuilder
  ) { 
    this.projectInfo = data.arrayData;
    this.projectId = data.projectId;

    this.newProject = this.formBuilder.group({
      codigo_proyecto :  new FormControl(this.codigo_proyecto, [Validators.required, Validators.minLength(4), Validators.maxLength(7)]),
      // proyecto_id: new FormControl(''),
      nombre_proyecto: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      cliente: new FormControl(this.cliente, [Validators.required]),
      // presupuesto_proyecto: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
      presupuesto_proyecto: new FormControl(this.presupuesto_proyecto, [Validators.required, Validators.pattern('^[0-9]+([.][0-9]{1,2})?$')]),
      // presupuesto_proyecto: new FormControl('', Validators.required),
      fecha_inicial_proyecto: new FormControl(''),
      fecha_final_proyecto: new FormControl(''),
      responsable_proyecto: new FormControl('', [Validators.required]),
      centroDeCostos: new FormControl('', [Validators.required]),
      almacen: new FormControl(''),
      enviaANombre : new FormControl(''),
      enviaADireccion : new FormControl(''),
      enviaACd : new FormControl(''),
      enviaAEstado : new FormControl(''),
      enviaARequisitor : new FormControl(''),
      enviaATelefono : new FormControl(''),
      destinoCP : new FormControl(''),
    });
  }

// =========================
// PROCEDIMIENTOS
// =========================

  ngOnInit(): void {

    this.getcustomerAll();
    this.getAllProjects();
    this.getEnabledCategories();

console.log('data de entrada', this.projectInfo);

    if(this.projectId != 0){

      this.presupuestoFormatoLable = this.projectInfo["presupuesto_proyecto"];
      // this.presupuestoFormato = this.projectInfo["presupuesto_proyecto"];


        this.newProject.patchValue({
          proyecto_id : this.projectInfo["proyecto_id"],
          codigo_proyecto : this.projectInfo["codigo_proyecto"],
          nombre_proyecto : this.projectInfo["nombre_proyecto"] ,
          cliente : this.projectInfo["cliente_id"],
          presupuesto_proyecto : this.projectInfo["presupuesto_proyecto"] ,
          fecha_inicial_proyecto : this.projectInfo["fecha_inicial_proyecto"],
          fecha_final_proyecto : this.projectInfo["fecha_final_proyecto"] ,
          responsable_proyecto : this.projectInfo["responsable_proyecto"],
          centroDeCostos : this.projectInfo["centro_de_costo_proyecto"].toString() ,
          almacen : this.projectInfo["almacen_id"].toString()
      })
      this.nombre_proyecto = this.projectInfo["nombre_proyecto"];
      this.cliente = this.projectInfo["cliente_id"].toString() ;
      this.presupuesto_proyecto = this.projectInfo["presupuesto_proyecto"];
      this.fecha_inicial_proyecto = this.projectInfo["fecha_inicial_proyecto"];
      this.fecha_final_proyecto = this.projectInfo["fecha_final_proyecto"];
      this.responsable_proyecto = this.projectInfo["responsable_proyecto"];
      this.centro_de_costo_proyecto = this.projectInfo["centro_de_costo_proyecto"].toString();
      this.almacen = this.projectInfo["almacen_id"].toString();
      this.codigo_proyecto = '';
    }

  }

  validaCamposRequeridos() : boolean{
    let valido : boolean = true;
    valido = (this.newProject.get('codigo_proyecto').status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("nombre_proyecto").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("cliente").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("presupuesto_proyecto").status == 'INVALID' || this.newProject.get("presupuesto_proyecto").value <= 0) ? false : valido;
    valido = (this.newProject.get("fecha_inicial_proyecto").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("fecha_final_proyecto").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("responsable_proyecto").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("centroDeCostos").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("almacen").status == 'INVALID') ? false : valido;

    return valido;

  }

  save(form, event){

    let arrayTodb : any;

    if(this.validaCamposRequeridos() == false){
      this.openSnackBar('debe capturar los campos requeridos', '');
      return;
    }

    if(this.projectId == 0){
      arrayTodb = { codigo_proyecto : this.newProject.controls["codigo_proyecto"].value,
                  nombre_proyecto : this.newProject.controls["nombre_proyecto"].value,
                  cliente_id : this.newProject.controls["cliente"].value,
                  presupuesto_proyecto : this.newProject.controls["presupuesto_proyecto"].value,
                  fecha_inicial_proyecto : moment(this.fecha_inicial_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                  fecha_final_proyecto : moment(this.fecha_final_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                  responsable_proyecto : this.newProject.controls["responsable_proyecto"].value,
                  centro_de_costo_proyecto : this.newProject.controls["centroDeCostos"].value,
                  almacen_id : this.newProject.controls["almacen"].value};

      // Actualiza registro NUEVO
      this._projectService.insertProjects(arrayTodb).subscribe(
        res=> {
          console.log('Se inserto con éxito', res);
          this.openSnackBar('Se genero el proyecto exitosamente', 'success');
          
          // Inserta categorias
          this.insertCategories();
        },
        error => console.log("error alta de proyectos",error)
      )
    }
    else{
      arrayTodb = {proyecto_id : this.projectId,
        nombre_proyecto : this.newProject.controls["nombre_proyecto"].value,
        cliente_id : this.newProject.controls["cliente"].value,
        presupuesto_proyecto : this.newProject.controls["presupuesto_proyecto"].value,
        fecha_inicial_proyecto : moment(this.fecha_inicial_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        fecha_final_proyecto : moment(this.fecha_final_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        responsable_proyecto : this.newProject.controls["centroDeCostos"].value,
        centro_de_costo_proyecto : this.newProject.controls["centroDeCostos"].value,
        almacen_id : this.newProject.controls["almacen"].value,
        codigo_proyecto : this.newProject.controls["codigo_proyecto"].value};

        // Actualiza registro EDICION
        this._projectService.updateProjects(arrayTodb).subscribe(
        res=> {
        console.log('Se edito con éxito', res);
        },
        error => console.log("error consulta regiones",error)
        )
    }
    this.dialogRef.close();
  }

insertCategories(){
  // Obtiene Proyecto Registrado
  let datasourceProyectos : MatTableDataSource<projectModel>
  let proyectoIdMaximo : any = "0";
  let codigoProyecto : any = "0";
  let arrayProjectCategories : any;
  this._projectService.getProjectAll().subscribe(
    res=> {
      datasourceProyectos = new MatTableDataSource(res);

      proyectoIdMaximo = (datasourceProyectos.filteredData[datasourceProyectos.filteredData.length -1]["proyecto_id"]);
      codigoProyecto = datasourceProyectos.filteredData.find(e => e.proyecto_id == proyectoIdMaximo);

      this.datasourceCategories.forEach(element => {
        arrayProjectCategories = {proyecto_id : proyectoIdMaximo
            , categoria_id : element.categoria_id
            , presupuesto : 0
            , responsable : ''
            , fecha_inicial : moment(new Date, 'YYYY-MM-DD').format('YYYY-MM-DD')
            , almacen_id : 1
            , codigo_proyectocategoria : codigoProyecto["codigo_proyecto"] + '-' + element.codigo_categoria
        }

        // Inserta Proyecto Categoria
        this._projectCategoryservice.insertProjects(arrayProjectCategories).subscribe(
          res=> {
            console.log('CATEGORIAS', this.datasourceCategories);
          },
          error => console.log("error al insertar proyectos categorias",error)
        )
        
        arrayProjectCategories = null;

      });
      
    },
    error => console.log("error consulta todos los proyectos",error)
  )

}

fechaInicial(event){
  console.log('fecha', this.fecha_inicial_proyecto);
}

cancel(event){
  this.dialogRef.close();
}

addClient(form, event){
  // Catálogo de clientes
  const dialogConfig = new MatDialogConfig();

  dialogConfig.data = {
    id: 1,
    title: 'CLIENTE',
    arrayData : null,
    clienteId: 0,
    estadoPantalla: 'New'
   
  }
  
  dialogConfig.width = '1400px';
  dialogConfig.height = '700px';
  dialogConfig.disableClose = true;

  const dialogRef = this.dialog.open(CustomerDetailComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(result => {
    this.getcustomerAll();
  });
}

reloadClient(form, event){
  // Carga clientes
  this.getcustomerAll();
}


selectcustommer(event){
  this.cliente = event.value;
}

  // =========================
  // UTILERIAS
  // =========================

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
  }

  onChange(event: any){
    console.log('onfilechange', event);
    this.presupuestoFormato = (event.target as HTMLInputElement).value;
    this.presupuestoFormatoLable = (event.target as HTMLInputElement).value;
  }

  _keyUp(event: any) {

    let ultimoCaracter : any;
    let valido : boolean = false;

    this.presupuestoFormato = (event.target as HTMLInputElement).value;
    this.presupuestoFormatoLable = (event.target as HTMLInputElement).value;

    console.log('presione : ', (event.target as HTMLInputElement).value);
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if(this.presupuesto_proyecto.length > 0){
      ultimoCaracter = this.presupuesto_proyecto.slice(-1);

      for(let i = 0; i < 10; i++)
      {
        if(ultimoCaracter == i){
          valido = true;
        }
      }

      if(ultimoCaracter == '.'){
        valido = true;
      }

      if(valido == false)
      {
        this.presupuesto_proyecto = this.presupuesto_proyecto.substring(0,this.presupuesto_proyecto.length-1)
      }

    }
  }

  // =========================
  // SERVICIOS
  // =========================

  getAllProjects(){
    // Actualiza registro NUEVO
    this._projectService.getProjectAll().subscribe(
      res=> {
        this.datasourceProyects = res;
        if(this.projectId == 0){
          this.codigo_proyecto = Number(this.datasourceProyects[this.datasourceProyects.length - 1]["codigo_proyecto"]) + 1;
          this.newProject.controls["codigo_proyecto"].setValue(Number(this.datasourceProyects[this.datasourceProyects.length - 1]["codigo_proyecto"]) + 1);
          console.log('PROEYCTOS TODOS', this.proeycto_numero_mayor);
        }else{
          this.codigo_proyecto = this.projectInfo["codigo_proyecto"];
        }

      },
      error => console.log("error consulta proyectos",error)
    )
  }

  getEnabledCategories(){
    // Selecciona todas las categorías
    this._categoryService.getCategoryAll().subscribe(
      res=> {
        this.datasourceCategories = res;
        console.log('CATEGORIAS', this.datasourceCategories);
      },
      error => console.log("error consulta categorias",error)
    )
  }

  getcustomerAll(){
    // Selecciona todos los clientes
    this._customerservice.getcustomerAll().subscribe(
      res=> {
        this.datasourceCustomers = res;
        console.log('CLIENTES', this.datasourceCustomers);
      },
      error => console.log("error consulta categorias",error)
    )
  }

}
