import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { projectCategoryModel } from 'src/app/models/projectCategory.model';
import { projectCategoryservice } from 'src/app/services/projectCtegory/projectCateogry.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // Para paginación
  public pageIndex:number = 0;
  public pageSize:number = 20;
  public currentPage = 0;
  public totalSize:number = 0;
  public array: any;
  projectInfo : any;
  projectId : any;

  almacen : any = 1;
  fecha_inicial : any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  proyecto_id : any = 0;
  responsable : any = '';
  presupuesto : any = 0;
  activo : any = false;

  displayedColumns: string[] = ['select','codigo_proyectocategoria', 'nombre_categoria', 'responsable', 'presupuesto', 'fecha_inicial', 'almacen_id', 'actualizar'];
  datasourceProjectCategories : MatTableDataSource<projectCategoryModel>
  newProject: FormGroup;
  
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<projectCategoryModel>
      , @Inject(MAT_DIALOG_DATA) public data,public snackBar: MatSnackBar
      , private _projectCategoryservice : projectCategoryservice
      , private formBuilder: FormBuilder) { 
        this.projectInfo = data.arrayData;
        this.projectId = data.projectId;

        this.newProject = this.formBuilder.group({
          responsable: new FormControl(''),
          presupuesto: new FormControl(''),
          fecha_inicial: new FormControl('', Validators.required),
          almacen: new FormControl('')
      });
      }

  ngOnInit(): void {
    
    this.getproyectosCategorias();
  }

  getproyectosCategorias(){
    // Proyectos categorias
    this._projectCategoryservice.getProjectCateogryById(this.projectId).subscribe(
      res=> {
        console.log('Proyectos', res);
        this.datasourceProjectCategories = new MatTableDataSource(res);
        this.array = res;
        this.totalSize = this.array.length;
        this.datasourceProjectCategories.sort = this.sort;
      },
      error => console.log("error consulta regiones",error)
    )

  }

  ActivarDesactivar(element : any){
console.log('Actualiza registro de activar y desactivar', element)
  }

  save(element : any){
    console.log('element', element);
    let arraySaveData : any;

    arraySaveData = {proyectocategoria_id : element.proyectocategoria_id
          , codigo_proyectocategoria : element.codigo_proyectocategoria
          , presupuesto : element.presupuesto
          , responsable : element.responsable
          , fecha_inicial : element.fecha_inicial
          , almacen_id : element.almacen_id
          , activo : element.activo}

          console.log('datos a actualizar', arraySaveData)

  }

  fechaInicial(event){

  }

  salir(){
    this.dialogRef.close();
  }

}
