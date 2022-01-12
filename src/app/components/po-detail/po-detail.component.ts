import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { quotationservice  } from 'src/app/services/quotation/quotation.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { timeStamp } from 'console';
import { quotationDetailModel } from 'src/app/models/quotation-detail.model';
import { purchaseOrderservice } from 'src/app/services/PurchaseOrder.service';

@Component({
  selector: 'app-po-detail',
  templateUrl: './po-detail.component.html',
  styleUrls: ['./po-detail.component.css']
})
export class PoDetailComponent implements OnInit {
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
  @ViewChild(MatTable) tabla1: MatTable<any>;
  
  cotizacion_id : any = '';
  codigo_requisicioninterna : any = '';
  odc_Numero : any = '';
  proveedor_id : any = '';
  activoEdicion : boolean = true;
  displayedColumns = ['select', 'SKU', 'cantidad', 'unidad_de_medida', 'descripcion', 'medida', 'color', 'otras_Especificaciones', 'cantidad_Ordenar'];

  projectInfo : any;
  cotizacionId : any = 0;
  newProject: FormGroup;
  datasourceCotizaciones : any;
  datasourceCotizacionesDetalle : any;
  datasourcePoveedores : any[] = [];
  podatasource : MatTableDataSource<any>;
  po_count : number = 0;

  constructor(
    public dialogRef: MatDialogRef<quotationDetailModel>
    , private _quotationservice : quotationservice
    , @Inject(MAT_DIALOG_DATA) public data
    , public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private _purchaseOrderservice : purchaseOrderservice
  ) { 
    this.projectInfo = data.arrayData;

    this.newProject = this.formBuilder.group({
      cotizacion_id : new FormControl('', [Validators.required]),
      codigo_requisicioninterna: new FormControl('', [Validators.required]),
      odc_Numero: new FormControl('', [Validators.required]),
      proveedor_id: new FormControl('', [Validators.required])
  });

  }

  // =====================
  // PROCEDIMIENTOS
  // =====================

  ngOnInit(): void {
    this.getProveedores();
    this.getCotizacionesAll();
  }

  cotizacionSelected(form, event){
    console.log('pagina', form.controls['cotizacion_id'].value);
    this.getcotizacionesDetail(form.controls['cotizacion_id'].value);

  }

  cancel(event){
    this.dialogRef.close();
  }

  validaCamposRequeridos() : boolean{
    let valido : boolean = true;
    valido = (this.newProject.get('cotizacion_id').status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("codigo_requisicioninterna").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("odc_Numero").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("proveedor_id").status == 'INVALID') ? false : valido;

    return valido;
  }

  save(form, event){

    if(this.validaCamposRequeridos() == false){
      this.openSnackBar('debe capturar los campos requeridos', 'success');
      return;
    }

    this.insertPOHdr(this.tabla1["_data"]);
  }

  ActivarDesactivar(element : any, event : Event){
    this.activoEdicion = event["checked"]
    console.log('Actualiza registro de activar y desactivar', event["checked"])
  }

  checkEnterKey(){

  }

  // =====================
  // UTILERIAS
  // =====================

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000});
  }

  // =====================
  // CONSILTA DE SERVICIOS
  // =====================

  getProveedores(){

    let arrayProvider : any [];

    arrayProvider = [];
    arrayProvider.push({proveedor_id : 1, proveedor_nombre : 'CABLES MONTERREY SA DE CV'},
                    {proveedor_id : 2, proveedor_nombre : 'VENTA DE CABLEADO SA'}
                    )

    this.datasourcePoveedores = arrayProvider;

    console.log(this.datasourcePoveedores);
  }

  getPO_Hdr(codigo_cotizacion : string){
    // ordenes de compra Todas
    let arrayPO_Hdr : any[];
    this._purchaseOrderservice.getPOAll().subscribe(
      res=> {
        console.log('PurchaseOrder', res);
        this.podatasource = new MatTableDataSource(res);

        arrayPO_Hdr = res.filter(e => e.codigo_cotizacion == codigo_cotizacion)
        this.po_count = arrayPO_Hdr.length + 1;
        this.odc_Numero = codigo_cotizacion + '-' + this.po_count.toString();
        
        
      },
      error => console.log("error consulta regiones",error)
    )
  }

  getCotizacionesAll(){
    this._quotationservice.getQuotationAll().subscribe(
      res=> {
        this.datasourceCotizaciones = res;
        console.log('COTIZACIONES TODAS', res);
  
      },
      error => console.log("error consulta proyectos",error)
    )
  }

  getcotizacionesDetail(cotizacion_id : any){
    this._quotationservice.getQuotationDetail(cotizacion_id).subscribe(
      res=> {
        this.datasourceCotizacionesDetalle = res;
        console.log('COTIZACIONES TODAS', res);

        this.getPO_Hdr(res[0]["codigo_cotizacion"]);
  
      },
      error => console.log("error consulta proyectos",error)
    )
  }

  insertPOHdr(table : any){
    
    let arrayTodb : any;
    let arrayDetail : any[] = [];
    let conteo : number = 0;

    table.forEach(element => {

      //Hdr
      if(conteo == 0){
        arrayTodb = {codigo : this.odc_Numero, cotizacion_id : element.cotizacion_id, proveedor_id : this.proveedor_id, fecha : moment(new Date, 'YYYY-M-DD')}
      }

      //Detalle
      if(element.activo == true)
      {
        arrayDetail.push( {ordendecompradetalle_id : 0
                            , cotizaciondetalle_id : element.cotizaciondetalle_id
                            , sku : element.sku
                            , medida : element.medida
                            , color : element.color
                            , otras_especificaciones : element.otras_especificaciones
                            , cantidad : element.cantidad
                            , unidad_medida : element.unidad_medida
                            , costo : element.costo
                            , descuento : element.descuento
                            , descripcion : element.descripcion });
      }
      conteo++;
    });

    console.log('ARRAY tO db', arrayTodb);

    this._purchaseOrderservice.insertPO_Hdr(arrayTodb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
  
        // INSERTA REQUISICIONES DET
        this.insertPODet(res, arrayDetail);
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  insertPODet(po_id : any, arrayDetail : any){

    let arrayTodbDetail : any;

    console.log('detalledet_para insertar', arrayDetail);
    console.log('po_id', po_id);

    arrayDetail.forEach(element => {

      arrayTodbDetail = {ordendecompradetalle_id : 0
                        , ordendecompra_id : po_id
                        , cotizaciondetalle_id : element.cotizaciondetalle_id
                        , sku : element.sku
                        , medida : element.medida
                        , color : element.color
                        , otras_especificaciones : element.otras_especificaciones
                        , cantidad : element.cantidad
                        , unidad_medida : element.unidad_medida
                        , costo : element.costo
                        , descuento : element.descuento
                        , descripcion : element.descripcion }
    
                        console.log('detalle', arrayTodbDetail);

    this._purchaseOrderservice.insertPODetail(arrayTodbDetail).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
  
      },
      error => console.log("error alta de proyectos",error)
    )
    });
    

  }

}
