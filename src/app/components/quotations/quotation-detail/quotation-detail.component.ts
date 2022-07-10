import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { projectModel } from 'src/app/models/project.model';
import { projectservice } from '../../../services/projects/project.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { projectCategoryservice } from 'src/app/services/projectCtegory/projectCateogry.service';
import { requisitionModel } from 'src/app/models/requisition.model';
import { requisitionservice } from '../../../services/requisition/requisition.service';
import { quotationservice } from '../../../services/quotation/quotation.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RequisitionDetailComponent } from '../../requisitions/requisition-detail/requisition-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.css']
})
export class QuotationDetailComponent implements OnInit {
  
  // ====================
  // DECLARACIONES
  // ====================

  // Para paginación
  public pageIndex:number = 0;
  public pageSize:number = 20;
  public currentPage = 0;
  public totalSize:number = 0;
  public array: any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatTable) tabla1: MatTable<any>;
    
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
  dataSourceDetail : MatTableDataSource<RequisitionDetailComponent>
  seleccionaRegistro : any;
  displayedColumns = ['select', 'sku', 'descripcion', 'medida', 'color', 'um', 'cantidad', 'cantidad_comprar' ];

  projectInfo : any;
  requisicionId : any = 0;
  estadoPantalla : any;
  quotationId : any = 0;
  newProject: FormGroup;
  datasourceCategories : any[] = [];
  datasourcePorjects : any[] = [];
  datasourceRequisition : any;
  datasourceRequisitionDetail : any = [];
  datasourceCotizaciones : any;
  datasourceCotizacionesDet : any[] = [];
  arraytemp : any = [];
  selectionM: boolean;
  disabledM: boolean;
  sku : string;
  descripcion : string;

  constructor(
    public dialogRef: MatDialogRef<projectModel>
    , private _projectService : projectservice
    , private _projectCategoryservice : projectCategoryservice
    , @Inject(MAT_DIALOG_DATA) public data,public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private _requisitionservice : requisitionservice
    , private _quotationservice : quotationservice
  ) { 
    this.projectInfo = data.arrayData;
    this.requisicionId = data.requisicionId;
    this.quotationId = data.cotizacionId;
    this.estadoPantalla = data.estadoPantalla

    this.newProject = this.formBuilder.group({
      proyecto_id : new FormControl('', [Validators.required]),
      categoria_id: new FormControl('', [Validators.required]),
      requisicion_id: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      requisicion_Numero : new FormControl('', [Validators.required]),
      cotizacion_Numero : new FormControl('', [Validators.required]),
      seleccionar : new FormControl('')
  });
  }

  ngOnInit(): void {

    this.getProyectos();
    if(this.projectInfo["cotizacion_id"] != 0){
        this.newProject.patchValue({
          proyecto_id : this.projectInfo["proyecto_id"],
          requisicion_id : '', 
          requisicion_Numero : this.projectInfo["codigo_requisicioninterna"] ,
          categoria_id : '', 
          fecha : this.projectInfo["fecha"] ,
          cotizacion_Numero : this.projectInfo["codigo"] ,
          loadfile : ''
          
      })
      this.requisicion_Numero = this.projectInfo["codigo"];
      this.proyecto_id = this.projectInfo["proyecto_id"];
      this.requisicion_id = '';
      this.categoria_id = this.projectInfo["categoria_id"];
      this.fecha = '';
      this.loadfile = '';
      
      this.getQuotationDetail(this.projectInfo["cotizacion_id"]);
    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
  }

  proyectoSelected(){
    this.getCategories(this.newProject.controls["proyecto_id"].value);
  }

  categorySelected(){
    this.getrequisitionAll();
  }

  RequisitionSelected(){
    
    let arrayRequisicion_interna : any;

    this.requisicionId = this.newProject.controls["requisicion_Numero"].value;
    arrayRequisicion_interna = this.datasourceRequisition.filter(e => e.requisicioninterna_id == this.requisicionId);
    
    this.getCotizacionesAll(arrayRequisicion_interna[0]["codigo"])
    
    // Busca cotizaciones y arma nuevo numero de cotización
    this.getRequisitionDetail(this.requisicionId)
  }

  SeleccionarRegistro(cantidadOrdenar : any, requisicionDet_id : any, uom : any, descripcionOrdenar : any, event : Event){

    let arrayRequisicioneDetalle : any[] = [];

    if(event["checked"] == true && this.datasourceCotizacionesDet.filter(e => e.requisicionDetalle_id == requisicionDet_id).length == 0){
        this.datasourceCotizacionesDet.push({requisicioninternaDetalle_id : requisicionDet_id, cantidad : cantidadOrdenar, um: uom, descripcion: descripcionOrdenar})
    }

    if(event["checked"] == false && this.datasourceCotizacionesDet.filter(e => e.requisicionDetalle_id == requisicionDet_id).length != 0){
      arrayRequisicioneDetalle = this.datasourceCotizacionesDet.filter(e => e.requisicionDetalle_id != requisicionDet_id)
      this.datasourceCotizacionesDet = [];
      this.datasourceCotizacionesDet = arrayRequisicioneDetalle;
    }
  }

  validaCamposRequeridos() : boolean{
    let valido : boolean = true;
    valido = (this.newProject.get('proyecto_id').status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("categoria_id").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("requisicion_Numero").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("cotizacion_Numero").status == 'INVALID') ? false : valido;

    return valido;
  }

  save(form, event){

    let arrayTodb : any;

    if(this.estadoPantalla == 'new'){
      if(this.validaCamposRequeridos() == false){
        this.openSnackBar('debe capturar los campos requeridos', 'success');
        return;
      }

      arrayTodb = { 
                  requisicioninterna_id : this.newProject.controls["requisicion_Numero"].value,
                  codigo : this.newProject.controls["cotizacion_Numero"].value,
                  fecha : moment(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD')
                };

      // INSERTA REQUISICION HDR
      this.insertQuotationHeader(arrayTodb);
    }
    else{

      // INSERTA REQUISICIONES DET
      this.updateQuotationDet(this.quotationId);

    }
    this.dialogRef.close();
  }

  fechaControl(event){
    console.log('fecha', this.fecha);
  }

  cancel(event){
    this.dialogRef.close();
  }

  checkProduct(event){

    if (event.checked ) {
      console.log('checado');
          // this.datasourceRequisitionDetail.data= this.datasourceRequisitionDetail.data.filter(s => s.productName.toUpperCase() === product.toUpperCase());
    //       this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    //       this.dataSource.data.forEach(station => {
    //         this.setStations.push(station);
    //       });

    }else{
      console.log('no checaco');
      // this.setStations = [];
      // this.setTableDataAndConfig();
      // this.selection.clear();
      this.selectionM = false;
      this.disabledM = false;
    }
  }

 

// =============================
// UTILERIAS
// =============================

find(form, event){
  // Buscar requisiciones
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

showMessage(tipoMensaje : number, header: string, icon: any, message : string, buttonCaption: string){
  
  switch(tipoMensaje){
    case(1) : 
        Swal.fire({
          title: header,
          html: '<p style="text-transform: capitalize;"></p>' + '<p><b>' + message + '</b></p>' + '<p style="text-transform: capitalize;"></p>',
          icon: icon,
          confirmButtonText: buttonCaption,
          customClass: {
              confirmButton: 'btn  btn-rounded btn-outline-warning'
          }
        })
      break;
    case(2) :
        Swal.fire({
          position: 'top-end',
          icon: icon,
          title: message,
          showConfirmButton: false,
          timer: 1500
        })
      break;
  }
}


// =============================
// CONSUME SERVICIOS
// =============================

getProyectos(){
  // Obtiene proyectos
  this._projectService.getProjectAll().subscribe(
    res=> {

        // Ordena los proyectos
        res.sort(function (a, b) {
          if (a.codigo_proyecto < b.codigo_proyecto) {
            return 1;
          }
          if (a.codigo_proyecto > b.codigo_proyecto) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        
      this.datasourcePorjects = res;
      console.log('PROYECTOS', res);
    },
    error => console.log("error consulta proyectos",error)
  )
}

getCotizacionesAll(requisicion_interna : any){
  this._quotationservice.getQuotationAll().subscribe(
    res=> {
      this.datasourceCotizaciones = res;
      console.log('COTIZACIONES TODAS', res);
      this.cotizacion_Numero = this.cotizacion_Numero = requisicion_interna + '-' + (this.datasourceCotizaciones.filter(e => e.codigo_requisicioninterna == requisicion_interna).length + 1);
      this.newProject.controls["cotizacion_Numero"].setValue(this.cotizacion_Numero = requisicion_interna + '-' + (this.datasourceCotizaciones.filter(e => e.codigo_requisicioninterna == requisicion_interna).length + 1));

    },
    error => console.log("error consulta proyectos",error)
  )
}

getQuotationDetail(cotizacionId : number){
  let arrayQuoteDetail : any = []
// Obtiene el detalle de la cotización
this._quotationservice.getQuotationDetail(cotizacionId).subscribe(
  res=> {

    res.forEach(element => {
      arrayQuoteDetail.push({
        activo : true
        ,cotizaciondetalle_id: element.cotizaciondetalle_id
        ,codigo_cotizacion: element.codigo_cotizacion
        ,requisicioninternadetalle_id: element.requisicioninternadetalle_id
        ,cotizacion_id: element.cotizacion_id
        ,sku: element.sku
        ,medida: element.medida
        ,color: element.color
        ,otras_especificaciones: element.otras_especificaciones
        ,cantidad: element.cantidad
        ,unidad_medida: element.unidad_medida
        ,descripcion: element.descripcion
        ,descuento: 0
        ,costo: 0
      })
    });


    this.datasourceRequisitionDetail = arrayQuoteDetail;

    console.log('payload deseado', this.datasourceRequisitionDetail)
    console.log('datasourde cotizacion', res);

  },
  error => console.log("error consulta requisiciones",error)
)
}

getrequisitionAll(){
  // Obtiene todas las requisiciones 
  this._requisitionservice.getRequisitionAll().subscribe(
    res=> {
      // this.datasourceRequisition = [];
      this.datasourceRequisition = res;
        this.datasourceRequisition = this.datasourceRequisition.filter(e => e.proyectocategoria_id == this.newProject.controls["categoria_id"].value);
    },
    error => console.log("error consulta requisiciones",error)
  )

}

getrequisition(){
  // Obtiene las requisiciones 
  this._requisitionservice.getRequisitionById(this.newProject.controls["categoria_id"].value).subscribe(
    res=> {
      this.datasourceRequisition = [];
      this.datasourceRequisition.push(res);
        console.log('REQUISICIONES', this.datasourceRequisition);
    },
    error => console.log("error consulta requisiciones",error)
  )
}

getRequisitionDetail(Requisition_Id : any){
  let arrayRequisitionDetail : any  = [];
  // Obtiene requisiciones 
  this._requisitionservice.getRequisitionDetail(Requisition_Id).subscribe(
    res=> {

      res.forEach(element => {
        arrayRequisitionDetail.push({
          activo : true
          , requisicioninternadetalle_id : element.requisicioninternadetalle_id
          , requisicioninterna_id : element.requisicioninterna_id
          , cantidad : element.cantidad
          , sku : element.sku
          , codigo_requisicioninterna : element.codigo_requisicioninterna
          , unidad_medida : element.unidad_medida
          , descripcion : element.descripcion
          , existencia_almacen : element.existencia_almacen
          , cantidad_comprar : element.cantidad_comprar
          , medida : element.medida
          , color : element.color
          , otras_especificaciones : element.otras_especificaciones
          , estado : element.estado
          , cotizado : element.cotizado
        })
      });

      this.datasourceRequisitionDetail = (arrayRequisitionDetail);

        console.log('REQUISICIONES DETALLE', this.datasourceRequisitionDetail);
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

insertQuotationHeader(arrayTodb : any){
  this._quotationservice.insertQuotation(arrayTodb).subscribe(
    res=> {
      console.log('Se inserto con éxito', res);

      // INSERTA REQUISICIONES DET
      this.insertQuotationDet(res);
    },
    error => console.log("error alta de proyectos",error)
  )
}

insertQuotationDet(cotizacionId : any){

  // Obtiene Requisicion Registrada
  let datasourceRequsition : MatTableDataSource<requisitionModel>
  let requisitionIdMaximo : any = "0";
  let arrayToDb : any;

  this.tabla1["_data"].forEach(element => {
    if(element.activo == true){
      arrayToDb = { cotizaciondetalle_id: 0
        , codigo_cotizacion : ''
        , requisicioninternadetalle_id : element.requisicioninternadetalle_id
        , cotizacion_id : cotizacionId
        , sku : element.sku
        , medida : element.medida
        , color : element.color
        , otras_especificaciones : element.otras_especificaciones
        , cantidad : element.cantidad
        , unidad_medida : element.unidad_medida
        , descripcion : element.descripcion
        , descuento : 0
        , costo : 0
      }
    
    // Inserta Proyecto Categoria
    this._quotationservice.insertQuotationDetail(arrayToDb).subscribe(
      res=> {
        console.log('INSERTA COTIZACION DETALLE', arrayToDb);
        this.showMessage(2, 'Guardardo', 'success', 'La cotización se guardo exitosamente', 'Cerrar');
      },
      error => console.log("error al insertar proyectos categorias",error)
    )
  }

    arrayToDb = null;

  });

}

updateQuotationDet(cotizacionId : any){

  // Obtiene Requisicion Registrada
  let datasourceRequsition : MatTableDataSource<requisitionModel>
  let requisitionIdMaximo : any = "0";
  let arrayToDb : any;

  this.tabla1["_data"].forEach(element => {
    if(element.activo == true){
      arrayToDb = { cotizaciondetalle_id: element.cotizaciondetalle_id
        , codigo_cotizacion : ''
        , requisicioninternadetalle_id : element.requisicioninternadetalle_id
        , cotizacion_id : cotizacionId
        , sku : element.sku
        , medida : element.medida
        , color : element.color
        , otras_especificaciones : element.otras_especificaciones
        , cantidad : element.cantidad
        , unidad_medida : element.unidad_medida
        , descripcion : element.descripcion
        , descuento : 0
        , costo : 0
      }

    // Actualiza Cotizacion Detalle
    this._quotationservice.updateQuotationDetail(arrayToDb).subscribe(
      res=> {
        console.log('INSERTA COTIZACION DETALLE', arrayToDb);
        this.showMessage(2, 'Guardardo', 'success', 'La cotización se guardo exitosamente', 'Cerrar');
      },
      error => console.log("error al insertar proyectos categorias",error)
    )
  }

    arrayToDb = null;

  });

}

}
