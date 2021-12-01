import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
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

@Component({
  selector: 'app-project-capture-detail',
  templateUrl: './project-capture-detail.component.html',
  styleUrls: ['./project-capture-detail.component.css']
})
export class ProjectCaptureDetailComponent implements OnInit {
	
  fecha_inicial_proyecto:any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  fecha_final_proyecto:any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  nombre_proyecto : any = ''  
  cliente : any = '0';
  presupuesto_proyecto : any = 0;
  responsable_proyecto : any = '';
  centro_de_costo_proyecto : any = '0';
  almacen : any = '0';
  codigo_proyecto : any = '';
  proeycto_id_mayor : number = 0;
  proeycto_numero_mayor : number = 0;

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

  constructor(
    public dialogRef: MatDialogRef<projectModel>
    , private _projectService : projectservice
    , private _categoryService : categoryservice
    , private _projectCategoryservice : projectCategoryservice
    , @Inject(MAT_DIALOG_DATA) public data,public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
  ) { 
    this.projectInfo = data.arrayData;
    this.projectId = data.projectId;

    this.newProject = this.formBuilder.group({
      codigo_proyecto :  new FormControl(this.codigo_proyecto, [Validators.required, Validators.minLength(4), Validators.maxLength(7)]),
      // proyecto_id: new FormControl(''),
      nombre_proyecto: new FormControl(''),
      cliente: new FormControl(''),
      presupuesto_proyecto: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
      // presupuesto_proyecto: new FormControl('', Validators.required),
      fecha_inicial_proyecto: new FormControl(''),
      fecha_final_proyecto: new FormControl(''),
      responsable_proyecto: new FormControl(''),
      centroDeCostos: new FormControl(''),
      almacen: new FormControl('')  
    });
  }

  ngOnInit(): void {

    this.getAllProjects();
    this.getEnabledCategories();

    if(this.projectId != 0){
        this.newProject.patchValue({
          proyecto_id : this.projectInfo["proyecto_id"],
          codigo_proyecto : this.projectInfo["codigo_proyecto"],
          nombre_proyecto : this.projectInfo["nombre_proyecto"] ,
          cliente : this.projectInfo["cliente_id"],
          presupuesto_proyecto : this.projectInfo["presupuesto_proyecto"] ,
          fecha_inicial_proyecto : this.projectInfo["fecha_inicial_proyecto"],
          fecha_final_proyecto : this.projectInfo["fecha_final_proyecto"] ,
          responsable_proyecto : this.projectInfo["responsable_proyecto"],
          centroDeCostos : this.projectInfo["centro_de_costo_proyecto_id"] ,
          almacen : this.projectInfo["almacen_id"]
      })

      this.nombre_proyecto = this.projectInfo["nombre_proyecto"];
      this.cliente = this.projectInfo["cliente_id"];
      this.presupuesto_proyecto = this.projectInfo["presupuesto_proyecto"];
      this.fecha_inicial_proyecto = this.projectInfo["fecha_inicial_proyecto"];
      this.fecha_final_proyecto = this.projectInfo["fecha_final_proyecto"];
      this.responsable_proyecto = this.projectInfo["responsable_proyecto"];
      this.centro_de_costo_proyecto = this.projectInfo["centro_de_costo_proyecto_id"];
      this.almacen = this.projectInfo["almacen_id"];
      this.codigo_proyecto = '';
    }

  }

  getAllProjects(){
    // Actualiza registro NUEVO
    this._projectService.getProjectAll().subscribe(
      res=> {
        this.datasourceProyects = res;
        if(this.projectId == 0){
          console.log('prpyeccccc', this.projectId )
          this.codigo_proyecto = Number(this.datasourceProyects[this.datasourceProyects.length - 1]["codigo_proyecto"]) + 1;
          console.log('PROEYCTOS TODOS', this.proeycto_numero_mayor);
        }else{
          this.codigo_proyecto = this.projectInfo["codigo_proyecto"];
        }

      },
      error => console.log("error consulta proyectos",error)
    )
  }

  getEnabledCategories(){
    // Actualiza registro NUEVO
    this._categoryService.getCategoryAll().subscribe(
      res=> {
        this.datasourceCategories = res;
        console.log('CATEGORIAS', this.datasourceCategories);
      },
      error => console.log("error consulta categorias",error)
    )
  }

  save(form, event){

    let arrayTodb : any;

    if(this.projectId == 0){

      arrayTodb = { codigo_proyecto : this.codigo_proyecto,
                  nombre_proyecto : this.nombre_proyecto,
                  cliente_id : this.cliente,
                  presupuesto_proyecto : this.presupuesto_proyecto,
                  fecha_inicial_proyecto : moment(this.fecha_inicial_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                  fecha_final_proyecto : moment(this.fecha_final_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                  responsable_proyecto : this.responsable_proyecto,
                  centro_de_costo_proyecto_id : this.centro_de_costo_proyecto,
                  almacen_id : this.almacen};

      // Actualiza registro NUEVO
      this._projectService.insertProjects(arrayTodb).subscribe(
        res=> {
          console.log('Se inserto con éxito', res);

          // Inserta categorias
          this.insertCategories();
        },
        error => console.log("error alta de proyectos",error)
      )
    // Inserta categorias
    // this.insertCategories();
    // this.dialogRef.close();
    }
    else{
      arrayTodb = {proyecto_id : this.projectId,
        nombre_proyecto : this.nombre_proyecto,
        cliente_id : this.cliente,
        presupuesto_proyecto : this.presupuesto_proyecto,
        fecha_inicial_proyecto : moment(this.fecha_inicial_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        fecha_final_proyecto : moment(this.fecha_final_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        responsable_proyecto : this.responsable_proyecto,
        centro_de_costo_proyecto_id : this.centro_de_costo_proyecto,
        almacen_id : this.almacen,
        codigo_proyecto : this.codigo_proyecto};

        // Actualiza registro EDICION
        this._projectService.updateProjects(arrayTodb).subscribe(
        res=> {
        console.log('Se edito con éxito', res);
        },
        error => console.log("error consulta regiones",error)
        )
        this.dialogRef.close();
    }
  }

insertCategories(){

  console.log('para guardar')

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

      console.log('proyectoid proyectaso', codigoProyecto["codigo_proyecto"]);

      this.datasourceCategories.forEach(element => {
        console.log('proyectoid', codigoProyecto["codigo_proyecto"] + '-' + element.codigo_categoria);
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

}
