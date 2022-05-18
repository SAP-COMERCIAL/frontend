import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { poDetailModel } from 'src/app/models/po-detail.model'
import { purchaseOrderservice } from '../../../services/PurchaseOrder.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RequisitionDetailComponent } from '../../requisitions/requisition-detail/requisition-detail.component';
import Swal from 'sweetalert2';
import {ThemePalette} from '@angular/material/core';
import { poModel } from 'src/app/models/po.model';
import { timeStamp } from 'console';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { element } from 'protractor';
import { invoiceservice } from '../../../services/invoice.service'
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { invoiceDetailModel } from 'src/app/models/invoice-detail.model';

@Component({
  selector: 'app-invoice-detail-capture',
  templateUrl: './invoice-detail-capture.component.html',
  styleUrls: ['./invoice-detail-capture.component.css']
})
export class InvoiceDetailCaptureComponent implements OnInit {
  
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
  po_Id : any = '';
  proyecto_id : any = 0;
  requisicion_Numero : any = '';
  facturaNumero : any = '';
  subTotalFactura : any = '';
  ivaFactura : any = '';
  totalFactura : any = '';
  loadfile : any  = '';
  buscar : any = '';
  public nombreArchivo : any = 'selecciona archivo';
  dataSourceShow : MatTableDataSource<poModel>;
  dataExcel: any[];
  dataSourceDetail : MatTableDataSource<RequisitionDetailComponent>
  seleccionaRegistro : any;
  importe : number = 100
  subtotal : number = 0;
  ivaSubtotal : number = 0;
  total : number = 0;
  descuentoGlobal : number = 0
  cantidad_Ordenar : number = 0;
  invoiceId : number = 0;
  displayedColumns = ['select', 'sku', 'descripcion', 'medida', 'color', 'um', 'cantidad', 'cantidad_Ordenar', 'cantidad_Pendiente', 'cantidad_Surtida' ]; // , 'cantidad_restante'

  projectInfo : any;
  requisicionId : any = 0;
  quotationId : any = 0;
  newProject: FormGroup;
  datasourceCategories : any[] = [];
  datasourcePorjects : any[] = [];
  datasourceCotizaciones : any;
  datasourcePoDetail : any[] = [];
  arraytemp : any = [];
  selectionM: boolean;
  disabledM: boolean;

  constructor(
    public dialogRef: MatDialogRef<poModel>
    , @Inject(MAT_DIALOG_DATA) public data
    , public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private _purchaseOrderservice : purchaseOrderservice
    , private _invoiceservice : invoiceservice
  ) { 
    this.projectInfo = data.arrayData;
    this.proyecto_id = data.proyecto_id;

    this.newProject = this.formBuilder.group({
      facturaNumero: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      subTotalFactura : new FormControl('', [Validators.required]),
      ivaFactura : new FormControl('', [Validators.required]),
      totalFactura : new FormControl('', [Validators.required]),
      seleccionar : new FormControl('')
  });
  }

  ngOnInit(): void {

    console.log('this.projectInfo',  this.projectInfo.odc_id);

    this.po_Id = this.projectInfo.odc_id

    if(this.projectInfo["po_Id"] != 0){
        this.newProject.patchValue({
          // proyecto_id : this.projectInfo["proyecto_id"],
          requisicion_Numero : this.projectInfo["codigo_requisicioninterna"] ,
          categoria_id : '', 
          fecha : this.projectInfo["fecha"] ,
          cotizacion_Numero : this.projectInfo["codigo"] ,
          loadfile : ''
          
      })
      this.fecha = '';
      this.loadfile = '';
      
      this.getpoDetail(this.po_Id);
    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
  }

  SeleccionarRegistro(cantidadOrdenar : any, poDet_id : any, uom : any, descripcionOrdenar : any, event : Event){

    // this.activoEdicion = event["checked"]
    // console.log('Actualiza registro de activar y desactivar', event["checked"])
    // this.onBlurMethod(); 

    // let arrayPoDetalle : any[] = [];

    // if(event["checked"] == true && this.datasourcePoDetail.filter(e => e.ordendecompradetalle_id == poDet_id).length == 0){
    //     this.datasourcePoDetail.push({poDetalle_id : poDet_id, cantidad : cantidadOrdenar, um: uom, descripcion: descripcionOrdenar})
    // }

    // if(event["checked"] == false && this.datasourcePoDetail.filter(e => e.ordendecompradetalle_id == poDet_id).length != 0){
    //   arrayPoDetalle = this.datasourcePoDetail.filter(e => e.ordendecompradetalle_id != poDet_id)
    //   this.datasourcePoDetail = [];
    //   this.datasourcePoDetail = arrayPoDetalle;
    // }
  }

  validaCamposRequeridos() : boolean{
    let valido : boolean = true;
    valido = (this.newProject.get('proyecto_id').status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("categoria_id").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("po_Id").status == 'INVALID') ? false : valido;

    return valido;
  }

  save(form, event){

    let arrayTodb : any;

    // if(this.validaCamposRequeridos() == false){
    //   this.openSnackBar('debe capturar los campos requeridos', 'success');
    //   return;
    // }

    if(this.invoiceId == 0){
      arrayTodb = { 
        codigo : this.newProject.controls["facturaNumero"].value,
        proyecto_id : this.proyecto_id,
        ordenDeCompra_Id : this.po_Id,
        fecha : moment(new Date), //moment(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        iva : 16, //this.newProject.controls["ivaFactura"].value,
        iva_moneda : this.newProject.controls["ivaFactura"].value,
        tipo_moneda : 'MXN', //this.newProject.controls["categoria_id"].value,
        sub_total : this.newProject.controls["subTotalFactura"].value,
        descuento_global : 0, //this.newProject.controls["categoria_id"].value,
        total : this.newProject.controls["totalFactura"].value,
        estatus : 1, //this.newProject.controls["categoria_id"].value,
        factura_id : 0
      };

      // INSERTA REQUISICION HDR
      this.insertInvoiceHeader(arrayTodb);
    }
    else{
      arrayTodb = {
        codigo : this.newProject.controls["facturaNumero"].value,
        proyecto_id : this.newProject.controls["proyecto_id"].value,
        ordenDeCompra_Id : this.newProject.controls["po_Id"].value,
        fecha : moment(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        iva : 16, //this.newProject.controls["ivaFactura"].value,
        iva_moneda : this.newProject.controls["ivaFactura"].value,
        tipo_moneda : 'MXN', //this.newProject.controls["categoria_id"].value,
        sub_total : this.newProject.controls["subTotalFactura"].value,
        descuento_global : 0, //this.newProject.controls["categoria_id"].value,
        total : this.newProject.controls["totalFactura"].value,
        estatus : 1, //this.newProject.controls["categoria_id"].value,
        factura_id : 0,
      };
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

    console.log('seleccion event', event)

    if (event.checked ) {
      console.log('checado');

    }else{
      console.log('no checaco');
      this.selectionM = false;
      this.disabledM = false;
    }
  }

  checkEnterKey(){
    
  }

  onBlurMethod(element, event){
    let descuento : number = 0;

    if(this.cantidad_Ordenar > element.cantidad){
      this.showMessage(1, 'Cantidad invalida', 'error', 'La cantidad recibida no puede ser mayor a la ordenada', 'Cerrar');
      return;
    }

    if (this.tabla1["_data"][0]["activo"] != undefined && this.tabla1["_data"][0]["precio_unitario"] != undefined){ // && this.tabla1["_data"][0]["activo"] == true 
      
      this.importe = 0;
      this.subtotal = 0;
      this.ivaSubtotal = 0;
      this.total = 0;

      this.tabla1["_data"].forEach(element => {
      
        if (element.activo != undefined && element.activo == true && element.precio_unitario != undefined){
          this.subtotal = this.subtotal + element.cantidad * (element.precio_unitario - element.descuento);
        }
            
      });

      this.subtotal = this.subtotal - descuento

      // this.ivaSubtotal = this.ivaSubtotal + (this.subtotal * (this.iva/100));
      this.total = this.subtotal + this.ivaSubtotal;
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

getpoDetail(po_id : number){
// Obtiene el detalle de la cotización
let arrayPoDetail : any[] = [];

this._purchaseOrderservice.getPODetail(po_id).subscribe(
  res=> {
    arrayPoDetail = res

    this.datasourcePoDetail = [];
    arrayPoDetail.forEach(element => {
      this.datasourcePoDetail.push({
        activo : true
        , cantidad : element.cantidad
        , color : element.color
        , cotizaciondetalle_id : element.cotizaciondetalle_id
        , descripcion : element.descripcion
        , descuento : element.descuento
        , importe_total : element.importe_total
        , medida : element.medida
        , ordendecompra_id : element.ordendecompra_id
        , ordendecompradetalle_id : element.ordendecompradetalle_id
        , otras_especificaciones : element.otras_especificaciones
        , precio_unitario : element.precio_unitario
        , sku : element.sku
        , unidad_medida : element.unidad_medida
        , cantidad_Ordenar : element.cantidadPendiente
        , cantidad_Pendiente : element.cantidadPendiente
        , cantidad_Surtida : element.cantidadSurtida
      })  
    });

    // this.datasourcePoDetail = res;
    console.log('DETALLLEEEE', res);
    console.log('datasoruce de ODC detalle', this.datasourcePoDetail);

  },
  error => console.log("error consulta requisiciones",error)
)
}


insertInvoiceHeader(arrayTodb : any){
  this._invoiceservice.insertInvoice_Hdr(arrayTodb).subscribe(
    res=> {
      console.log('Se inserto con éxito', res);
      this.invoiceId = Number(res);
      
      // INSERTA REQUISICIONES DET
      this.insertInvoiceDet(res);
    },
    error => console.log("error alta de proyectos",error)
  )
}

insertInvoiceDet(cotizacionId : any){

  console.log('para guardar', this.datasourcePoDetail);

  // Obtiene Requisicion Registrada
  let datasourceRequsition : MatTableDataSource<invoiceDetailModel>
  let requisitionIdMaximo : any = "0";
  let arrayToDb : any;

  this.tabla1["_data"].forEach(element => {
    console.log('elementos', element);
    if(element.activo == true){
      arrayToDb = { 
        factura_id: this.invoiceId
        , ordendeCompraDetalle_id : element.ordendecompradetalle_id
        , sku : element.sku
        , medida : element.medida
        , color : element.color
        , otra_especificacion : element.otras_especificaciones
        , cantidad : element.cantidad_Ordenar
        , um : 'pz' //element.unidad_de_medida
        , preciounitario : element.precio_unitario
        , importetotal : element.importe_total
        , descuento : 0
        , descripcion : element.descripcion
      }
    
      console.log('elementos a insertar', arrayToDb);
    // Inserta Proyecto Categoria
    this._invoiceservice.insertInvoiceDetail(arrayToDb).subscribe(
      res=> {
        console.log('INSERTA FACTURA DETALLE', arrayToDb);
        this.showMessage(2, 'Guardardo', 'success', 'La factura se guardo exitosamente' + this.invoiceId, 'Cerrar');
      },
      error => console.log("error al insertar proyectos categorias",error)
    )
  }

    arrayToDb = null;

  });

}


}
