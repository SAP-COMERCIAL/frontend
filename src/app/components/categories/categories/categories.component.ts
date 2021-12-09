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
import { MatSelectChange } from '@angular/material/select';

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

  almacen_id : any = '1';
  fecha_inicial : any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  proyecto_id : any = 0;
  responsableEdicion : any = '';
  presupuestoEdicion : any = '';
  activoEdicion : boolean = false;
  almacenEdicion : any = '';
  fechaEdicion : any = moment(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
  presupuesto : any = 0;
  activo : any = false;

  displayedColumns: string[] = ['select','codigo_proyectocategoria', 'nombre_categoria', 'responsable', 'presupuesto', 'fecha_inicial', 'almacen_id', 'actualizar'];
  datasourceProjectCategories : MatTableDataSource<projectCategoryModel>
  // newProject: FormGroup;
  
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<projectCategoryModel>
      , @Inject(MAT_DIALOG_DATA) public data,public snackBar: MatSnackBar
      , private _projectCategoryservice : projectCategoryservice
      , private formBuilder: FormBuilder) { 
        this.projectInfo = data.arrayData;
        this.projectId = data.projectId;

      //   this.newProject = this.formBuilder.group({
      //     responsable: new FormControl(''),
      //     presupuesto: new FormControl(''),
      //     fecha_inicial: new FormControl('', Validators.required),
      //     almacen_id: new FormControl(''),
      //     activo: new FormControl('')
      // });
      }

  ngOnInit(): void {
    
    this.getproyectosCategorias();
  }

  getproyectosCategorias(){
    // Proyectos categorias
    this._projectCategoryservice.getProjectCateogryById(this.projectId).subscribe(
      res=> {
        // console.log('this.datasourceProjectCategories.filteredData["responsable"]', this.datasourceProjectCategories.filteredData["responsable"]);
        console.log('Proyectos', res);
        this.datasourceProjectCategories = new MatTableDataSource(res);
        this.array = res;
        this.totalSize = this.array.length;
        this.datasourceProjectCategories.sort = this.sort;
        // this.newProject.controls["responsable"].setValue = this.datasourceProjectCategories.filteredData["responsable"];
        
      },
      error => console.log("error consulta regiones",error)
    )

  }

  ActivarDesactivar(element : any, event : Event){
    this.activoEdicion = event["checked"]
    console.log('Actualiza registro de activar y desactivar', event["checked"])
  }

  save(element : any, camporesponsable : any, event : Event){
    let arraySaveData : any;
    console.log('frfrfr', element);
    console.log('ENTRADA', event);

    arraySaveData = {proyectocategoria_id : element.proyectocategoria_id
          , codigo_proyectocategoria : element.codigo_proyectocategoria
          , presupuesto : (this.presupuestoEdicion != '') ? this.presupuestoEdicion : element.presupuesto //this.newProject.controls["presupuesto"].value
          , responsable : (this.responsableEdicion != '') ? this.responsableEdicion : element.responsable //this.newProject.controls["responsable"].value
          , fecha_inicial : (this.fechaEdicion != '') ? this.fechaEdicion : moment(element.fecha_inicial, 'YYYY-MM-DD').format('YYYY-MM-DD')
          , almacen_id : (this.almacenEdicion != '') ? this.almacenEdicion : element.almacen_id.toString()
          , activo : this.activoEdicion // (this.activoEdicion != false) ? this.activoEdicion : element.activo
        }

          console.log('datos a actualizar', arraySaveData)

          this.insertProjectCategoryDet(arraySaveData);

          // Limpia variables
          this.responsableEdicion = '';
          this.presupuestoEdicion = '';
          this.fechaEdicion = '';

  }

  checkEnterKey(event: Event, campo : any){

    switch (campo){
      case 'responsable' : this.responsableEdicion = (event.target as HTMLInputElement).value;
        break;
      case 'presupuesto' : this.presupuestoEdicion = (event.target as HTMLInputElement).value;
        break;
      case 'fecha' : this.fechaEdicion = moment((event.target as HTMLInputElement).value, 'YYYY-MM-DD').format('YYYY-MM-DD');
        break;
      default : this.responsableEdicion = '';
        break;
    }
    console.log('filtro', this.responsableEdicion);
  }

  insertProjectCategoryDet(arrayToDb : any){
    // Inserta Proyecto Categoria
    this._projectCategoryservice.updateProjectCatgory(arrayToDb).subscribe(
      res=> {
        console.log('ACTUALIZA PROYECO CATEGORIA', arrayToDb);
      },
      error => console.log("error al insertar proyectos categorias",error)
    )
    
  }

  seleccionaAlmacen(elementAlmacen : any){

    this.almacenEdicion = elementAlmacen.value;
    console.log('almacen', this.almacenEdicion);
  }

  salir(){
    this.dialogRef.close();
  }

}
