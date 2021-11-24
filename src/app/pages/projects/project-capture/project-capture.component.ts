import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as moment from 'moment';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { ProjectCaptureDetailComponent } from 'src/app/components/project-capture-detail/project-capture-detail/project-capture-detail.component';
import { CategoriesComponent } from 'src/app/components/categories/categories/categories.component';
import { projectservice } from '../../../services/projects/project.service';
import { projectModel } from '../../../models/project.model';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';

@Component({
  selector: 'app-project-capture',
  templateUrl: './project-capture.component.html',
  styleUrls: ['./project-capture.component.css'],
})
export class ProjectCaptureComponent implements OnInit {
// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  displayedColumns = ['codigo_proyecto', 'nombre_proyecto', 'fecha_inicial_proyecto', 'fecha_final_proyecto', 'nombre_cliente', 'responsable_proyecto', 'presupuesto_proyecto', 'proyect_id', 'editar', 'categorias'];

  projectData : any[] = [];
  dataSourceShow : MatTableDataSource<projectModel>; //<any> = new MatTableDataSource
  buscar:any;

  @Output() filterChange = new EventEmitter();

  constructor(public dialog: MatDialog
          , MatTableModule : MatTableModule
          , private _projectService : projectservice
          , private _excelService : ExcelServiceService) { 
    // this.displayedColumns = ['proyecto']
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){

    // Proyectos registrados
    this._projectService.getProjectAll().subscribe(
      res=> {
        console.log('Proyectos', res);
        this.dataSourceShow = new MatTableDataSource(res);
        this.array = res;
        this.totalSize = this.array.length;
        
        this.iterator();
        this.dataSourceShow.sort = this.sort;
        
      },
      error => console.log("error consulta regiones",error)
    )

  }

  onOpenDialogAddProject() {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      //title: 'NUEVO PROYECTO',
     
    }
    dialogConfig.width = '450px';
    dialogConfig.height = '350px';
    dialogConfig.disableClose = true;

  }

  editProyecto(element : any, event){
    console.log('Edita', element);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'EDITAR PROYECTO',
      arrayData : element,
      projectId : element.proyecto_id
     
    }
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(ProjectCaptureDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addCategorias(proyectoId : any, event){
    console.log('Alta de categoras', proyectoId);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'CATEGORIAS',
      arrayData : null,
      projectId: proyectoId
     
    }
    dialogConfig.width = '1400px';
    dialogConfig.height = '700px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(CategoriesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  nuevoProyecto(event){
    console.log('Alta de categoras');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'NUEVO PROYECTO',
      arrayData : null,
      projectId: 0
     
    }
    dialogConfig.width = '900px';
    dialogConfig.height = '500px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(ProjectCaptureDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  descargarProyectos(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({proyecto_id : element.proyecto_id
                              , nombre_proyecto : element.nombre_proyecto
                              , fecha_inicial_proyecto : moment(element.fecha_inicial_proyecto, 'YYYY-MM-DD').format('DD-MM-YYYY')
                              , fecha_final_proyecto : moment(element.fecha_final_proyecto, 'YYYY-MM-DD').format('DD-MM-YYYY')
                              , nombre_cliente : element.nombre_cliente
                              , responsable_proyecto : element.responsable_proyecto
                              , presupuesto_proyecto : element.presupuesto_proyecto
      })
    });

    
    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proyectos');  
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
