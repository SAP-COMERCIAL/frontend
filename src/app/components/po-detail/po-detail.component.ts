import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { quotationservice  } from 'src/app/services/quotation/quotation.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { quotationDetailModel } from 'src/app/models/quotation-detail.model';
import { purchaseOrderservice } from 'src/app/services/PurchaseOrder.service';
import { supplyservice } from '../../services/supplier.service';
import { SupplierDetailComponent } from '../supplier-detail/supplier-detail.component';
import jwt_decode from "jwt-decode";
import jsPDF from 'jspdf';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { MatMenu } from '@angular/material/menu';
declare var name: any;
import Swal from 'sweetalert2';
import { ElementSchemaRegistry } from '@angular/compiler';
import { mapMultiply } from 'chartist';
import { poDetailModel } from 'src/app/models/po-detail.model';
import * as XLSX from 'xlsx';
import { I } from '@angular/cdk/keycodes';
import { Console } from 'console';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { UserService } from '../../services/user.service';

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

@Component({
  selector: 'app-po-detail',
  templateUrl: './po-detail.component.html',
  styleUrls: ['./po-detail.component.css']
})
export class PoDetailComponent implements OnInit {
  title = 'htmltopdf';
  
  @ViewChild('pdfTable') pdfTable: ElementRef;
  // @ViewChild('AllTable') pdfTable: ElementRef;
  // ===================
  // DECLARACIONES
  // ===================

  // Para paginación
  public pageIndex:number = 0;
  public pageSize:number = 20;
  public currentPage = 0;
  public totalSize:number = 0;
  public array: any;

  logoDataUrl : string;
  logoDataCompras : string;
  logoDataControlProy : string;
  logoDataBlanco : string
  usuarioId : any;
  loading:boolean;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatTable) tabla1: MatTable<any>;
  
  cotizacion_id : any = '';
  codigo_requisicioninterna : any = '';
  odc_Numero : any = '';
  proveedor_id : any = '';
  activoEdicion : boolean = true;
  displayedColumns = ['select', 'SKU', 'cantidad', 'unidad_de_medida', 'descripcion', 'medida', 'color', 'otras_Especificaciones', 'cantidad_Ordenar', 'precio_unitario', 'descuento'];

  projectInfo : any;
  estadoPantalla : string;
  cotizacionId : any = 0;
  newProject: FormGroup;
  datasourceCotizaciones : any;
  datasourceCotizacionesDetalle : any;
  datasourcePoveedores : any[] = [];
  datasourcesupplier : any;
  datasourcePo_Detail : any;
  datasourceUsers : any;
  podatasource : MatTableDataSource<any>;
  po_count : number = 0;
  ordendecompra_id : number;
  iva:number = 16;
  subtotal:number = 0;
  ivaSubtotal:number = 0;
  total:number = 0;
  precio_unitario : number = 0;
  importe : number = 0;
  decodedSign : any;
  enviaANombre : string;
  enviaADireccion : any;
  enviaACd : any;
  enviaAEstado : any;
  enviaARequisitor : any;
  enviaATelefono : any;
  logoCCC: any;
  descuentoGlobal : number = 0;
  terminoYCondiciones : any;
  UploadDataExcel : MatTableDataSource<poDetailModel>;
  public nombreArchivo : any = 'selecciona archivo';
  dataExcel: any[];
  UserIdLogin : number;
  userIdAprove : number;
  userNameAprobe : string;
  estado : number;
  
  destinoNombre : any;
  destinoDireccion : any;
  destinoCiudad : any;
  destinoEstado : any;
  destinoCP : any;
  destinoTelefono : any;
  destinoRequisitor : any;

  constructor(
    public dialogRef: MatDialogRef<quotationDetailModel>
    , private _quotationservice : quotationservice
    , private _supplyservice : supplyservice
    , @Inject(MAT_DIALOG_DATA) public data
    , public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private _purchaseOrderservice : purchaseOrderservice
    , private _UserService : UserService
    , public dialog: MatDialog
  ) { 
    this.projectInfo = data.arrayData;
    this.estadoPantalla = data.estadoPantalla;
    this.loading = false;

    this.newProject = this.formBuilder.group({
      cotizacion_id : new FormControl('', [Validators.required]),
      codigo_requisicioninterna: new FormControl(''),
      odc_Numero: new FormControl('', [Validators.required]),
      proveedor_id: new FormControl('', [Validators.required]),
      iva: new FormControl('', [Validators.required]),
      subtotal: new FormControl('', [Validators.required]),
      ivaSubtotal: new FormControl('', [Validators.required]),
      total: new FormControl('', [Validators.required]),
      precio_unitario : new FormControl('', [Validators.required]),
      moneda : new FormControl('', [Validators.required]),
      enviaANombre : new FormControl(''),
      enviaADireccion : new FormControl(''),
      enviaACd : new FormControl(''),
      enviaAEstado : new FormControl(''),
      enviaARequisitor : new FormControl(''),
      enviaATelefono : new FormControl(''),
      descuentoGlobal : new FormControl(''),
      terminoYCondiciones : new FormControl(''),
      destinoCP : new FormControl(''),
  });

  }

  // =====================
  // PROCEDIMIENTOS
  // =====================

  ngOnInit(): void {
    // this.estado = this.projectInfo.estado;
    
    if(this.projectInfo != null){
      this.estado = this.projectInfo.estado;
    }else{
      this.estado = 0;
    }

        
    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBlanco.PNG').then(
      result => this.logoDataUrl = result
    )

    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaRoberto.PNG').then(
      result => this.logoDataCompras = result
    )

    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/imgControlProyectos.PNG').then(
      result => this.logoDataControlProy = result
    )

    this.getImageDataUrlFromLocalPath1('../../../assets/images/background/logoCCC.jpg').then(
      result => this.logoCCC = result
    )

    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/imgBlanco.png' ).then(
      result => this.logoDataBlanco = result
    )

    this.decode();
    this.getsupplierAll();
    this.getProveedores();
    this.getCotizacionesAll();

this.newProject.controls["descuentoGlobal"].setValue(0);

    if(this.projectInfo != undefined){
      this.ordendecompra_id = this.projectInfo.proveedor_nombre
      this.subtotal = this.projectInfo.sub_total;
      this.ivaSubtotal = this.projectInfo.iva_moneda;
      this.total = this.projectInfo.total;
      this.descuentoGlobal = this.projectInfo.descuento_global;

      this.getPO_Detail(this.projectInfo.ordendecompra_id);

      this.newProject.patchValue({
        cotizacion_id : this.projectInfo.cotizacion_id,
        codigo_requisicioninterna : this.projectInfo.fo,
        odc_Numero : this.projectInfo.ordendecompra_codigo,
        proveedor_id : this.projectInfo.proveedor_id,
        iva : this.projectInfo.iva.toString(),
        moneda : this.projectInfo.tipo_moneda.toString(),
        
        descuentoGlobal : (this.projectInfo.descuento_global.toString().length > 0 ) ? this.projectInfo.descuento_global.toString() : 0,
        terminoYCondiciones : this.projectInfo.terminos_condiciones.toString(),
        enviaANombre : this.projectInfo.destino_nombre.toString(),
        enviaADireccion : this.projectInfo.destino_direccion.toString(),
        enviaACd : this.projectInfo.destino_ciudad.toString(),
        enviaAEstado : this.projectInfo.destino_estado.toString(),
        destinoCP : (this.projectInfo.destino_cp.toString() != '0') ? this.projectInfo.destino_cp.toString() : '',
        enviaARequisitor : this.projectInfo.destino_requisitor.toString(),
        enviaATelefono : (this.projectInfo.destino_telefono.toString() != '0') ? this.projectInfo.destino_telefono.toString() : '',
      })
      
    }
  }

  cotizacionSelected(form, event){
    this.getcotizacionesDetail(form.controls['cotizacion_id'].value);

  }

  ivaSelected(form, event){
    this.iva = this.newProject.controls['iva'].value;
    this.onBlurMethod();
  }

  cancel(event){
    this.dialogRef.close();
  }

  validaPartidas() : boolean{
    let valido : boolean = true;
    let partidaSeleccionada : boolean = false;

    this.tabla1["_data"].forEach(element => {
      if(element.activo == true){
        partidaSeleccionada = true;
        if(element.cantidad == undefined || element.precio_unitario == undefined){
          valido = false;
          this.showMessage(1, 'Alerta', 'error', 'Uno o varios articulos no contienen cantidad o precio', 'Cerrar');
        }else{
          if(element.cantidad == 0 || element.precio_unitario == 0){
            valido = false;
            this.showMessage(1, 'Alerta', 'error', 'La cantidad o precio no pueden ser cero', 'Cerrar');
          }
        }
      }
    });

    if (partidaSeleccionada == false){
      this.showMessage(1, 'Alerta', 'error', 'Debe seleccionar al menos un articulo', 'Cerrar');
      valido = false;
    }

    return valido;
  }

  validaCamposRequeridos() : boolean{
    let valido : boolean = true;

    valido = (this.newProject.get('cotizacion_id').status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("codigo_requisicioninterna").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("odc_Numero").status == 'INVALID') ? false : valido;
    valido = (this.newProject.get("proveedor_id").status == 'INVALID') ? false : valido;
    
    if(valido == false){
      this.showMessage(1, 'Alerta', 'error', 'Debe capturar los campos requeridos', 'Cerrar');
    }

    return valido;
  }

  save(form, event){

    // VALIDACIONES
    if(this.subtotal <= 0 || this.iva <= 0 || this.total <= 0){
      this.showMessage(1, 'Alerta', 'error', 'Los totales no pueden ser negativos o cero', 'Cerrar');
      return;
    }

    if(this.validaCamposRequeridos() == false){
      return;
    }

    if(this.validaPartidas() == false){
      return;
    }

    // TERMINA VALIDACIONES

    if(this.estadoPantalla == 'new'){
      // INSERTA POHdr
      this.insertPOHdr(this.tabla1["_data"]);
    }else{
      // ACTUALUIZA POHdr
      this.updatePOHdr(this.tabla1["_data"]);
    }

  }

  Authoriza(form, event){
      this.updateODCStatus(form);
  }

  ActivarDesactivar(element : any, event : Event){
    this.activoEdicion = event["checked"]
    console.log('Actualiza registro de activar y desactivar', event["checked"])
    this.onBlurMethod(); 
  }

  checkEnterKey(){

  }

  addSupplier(form, event){
    // Catálogo de clientes
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'PROVEEDOR',
      arrayData : null,
      proveedorId: 0,
      estadoPantalla: 'New'
     
    }
    dialogConfig.width = '1400px';
    dialogConfig.height = '700px';
    dialogConfig.disableClose = true;
  
    const dialogRef = this.dialog.open(SupplierDetailComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(result => {
      this.getsupplierAll();
    });
  }

  reloadSupplier(form, event){
    // Carga clientes
    this.getsupplierAll();
  }

  selectsupplier(event){
    this.proveedor_id = event.value;
  }

  onBlurMethod(){
    let descuento : number = Number(this.newProject.controls["descuentoGlobal"].value);

    if (this.tabla1["_data"][0]["activo"] != undefined && this.tabla1["_data"][0]["precio_unitario"] != undefined){ // && this.tabla1["_data"][0]["activo"] == true 
      
      this.importe = 100
      this.subtotal = 0;
      this.ivaSubtotal = 0;
      this.total = 0;

      this.tabla1["_data"].forEach(element => {
        
        if (element.activo != undefined && element.activo == true && element.precio_unitario != undefined){
          this.subtotal = this.subtotal + element.cantidad * (element.precio_unitario - element.descuento);
        }
            
      });

      this.subtotal = this.subtotal - descuento

      this.ivaSubtotal = this.ivaSubtotal + (this.subtotal * (this.iva/100));
      this.total = this.subtotal + this.ivaSubtotal;

    }
  }

  modificaDescuento(event){
    this.descuentoGlobal = this.newProject.controls["descuentoGlobal"].value;
    if(this.subtotal != 0){
      this.onBlurMethod()
    }
  }

  onFileChange(event){
    this.datasourceCotizacionesDetalle = null;
    let descuento : number = Number(this.newProject.controls["descuentoGlobal"].value);
    
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    let extencionArchivo : string = '';
    let arrayExcel = [];

    this.UploadDataExcel = null;
    this.subtotal = 0;
    this.ivaSubtotal = 0;
    this.total = 0;
         
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
            sku : element.SKU,
            cantidad : element.CANTIDAD_REQUERIDA, 
            unidad_medida : element.UNIDAD,
            descripcion : element.DESCRIPCION,
            medida : element.MEDIDA,
            color : element.COLOR,
            otras_especificaciones : element.OTRAS_ESPECIFICACIONES,
            precio_unitario : element.PRECIO_UNITARIO,
            importe : element.IMPORTE,
            activo : true
           })

           if (element.PRECIO_UNITARIO != undefined){
            this.subtotal = this.subtotal + element.CANTIDAD_REQUERIDA * (element.PRECIO_UNITARIO);
          }
        }
      });

      this.subtotal = this.subtotal - descuento

      this.ivaSubtotal = this.ivaSubtotal + (this.subtotal * (this.iva/100));
      this.total = this.subtotal + this.ivaSubtotal;

      if(arrayErrores.length > 0){
        this.openSnackBar('Los registros contienen datos incorrectos', '');
        this.dataExcel = null;
        return;
      }

      this.UploadDataExcel = new MatTableDataSource(arrayExcel);
      this.datasourceCotizacionesDetalle = null;
      this.datasourceCotizacionesDetalle = this.UploadDataExcel.filteredData;
      };

      
    }
    else{
      this.openSnackBar('Los registros contienen datos incorrectos', '');
      this.deleteUploadFile(event);
    }

    // this.tabla1["_data"].forEach(element => {
    //   this.subtotal = parseInt(element.presupuesto);
    //   console.log('subtotal', element);
    //   // CalculaPresupuesto = CalculaPresupuesto + presupuestoCategoria;

    // });
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

  // =====================
  // UTILERIAS
  // =====================

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
  }

  decode(){
    let token = localStorage.getItem('token_access');
    this.decodedSign = jwt_decode(token)["firma"] + '?alt=media&token='; 
    let decodeUser = jwt_decode(token)["usuario"];
    let decodeId = jwt_decode(token);
    
    this.usuarioId = decodeUser;

    if(this.estado == 3){
      this.userNameAprobe = this.projectInfo.nombre_usuario;
    }else{
      this.userNameAprobe = this.usuarioId;
    }

    this.getusers();

    console.log('usuario para firma', this.userNameAprobe)

    switch(this.userNameAprobe){
      case('pablo'):  this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be'; //this.decodedSign = 'https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be' //this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
                        result => this.logoDataUrl = result
                      )
        break;
      case('alejandro_fuentes'): this.decodedSign = this.decodedSign + '36189034-32e5-4e28-b44c-43dec58e9999' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaAlejandro.PNG').then(
                        result => this.logoDataUrl = result
                      )
        break;
      case('bernardo_tamez'): this.decodedSign = this.decodedSign + '611d133a-d14a-45ab-a26a-f6e0dd570636' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBernardo.PNG').then(
                        result => this.logoDataUrl = result
                      )        
        break;
      case('fernando_chavez'): this.decodedSign = this.decodedSign + 'be146605-1624-48e9-b646-cf9dbfd4f7a8' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaFernando.PNG').then(
                        result => this.logoDataUrl = result
                      )   
        break;
      default: this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be'; // this.decodedSign = 'https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be' //this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be' 
                    // this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBlanco.PNG').then(              
                    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBlanco.PNG').then(
                      result => this.logoDataUrl = result
                    )
        break;
    }
  }
  
  public async downloadAsPDF() {
    let subtotalPDF : number = 0;
    let ivaPDF : number = 0;
    let totalPDF : number = 0;
    let ciudadEstado : string;
    let totalLetra : string;
    let terminosYCondiciones : string = this.newProject.controls["terminoYCondiciones"].value;
    let descuentoPDF : number = Number(this.newProject.controls["descuentoGlobal"].value);

    const doc = new jsPDF();   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);

    let arrayProveedor = this.datasourcesupplier.filter(e => e.proveedorid == this.projectInfo["proveedor_id"])

    var headers = {
      0:{
          col_1:{ text: 'Cantidad', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0], width: 20 },
          col_2:{ text: 'Unidad', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0], width: 20 },
          col_3:{ text: 'Descripción', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0], width: 90 },
          col_4:{ text: 'Precio Unitario', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0], width: 20  },
          col_5:{ text: 'Importe', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0], width: 20  },
          // col_6:{ text: 'SKU', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0], width: 20 }
      },
      1:{
          col_1:{ text: 'Header 1', style: 'tableHeader', alignment: 'center' },
          col_2:{ text: 'Header 2', style: 'tableHeader', alignment: 'center' }, 
          col_3:{ text: 'Header 3', style: 'tableHeader', alignment: 'center' },
          col_4:{ text: 'Citación', style: 'tableHeader', alignment: 'center' },
          col_5:{ text: 'Cumplimiento', style: 'tableHeader', alignment: 'center'},
          col_6:{ text: 'Cumplimiento', style: 'tableHeader', alignment: 'center'}
      }
    }

    let bodyx = [];
    var body = [];
    for (var key in headers){
        if (headers.hasOwnProperty(key)){
            var header = headers[key];
            var row = new Array();
            row.push( header.col_1 );
            row.push( header.col_2 );
            row.push( header.col_3 );
            row.push( header.col_4 );
            row.push( header.col_5 );
            // row.push( header.col_6 );
            body.push(row);
        }
    }

    for (var key in this.datasourceCotizacionesDetalle) {
        if (this.datasourceCotizacionesDetalle.hasOwnProperty(key))
        {
            var data = this.datasourceCotizacionesDetalle[key];
            var row = new Array();
            row.push( data.cantidad.toString() );
            row.push( data.unidad_medida.toString()  );
            row.push( data.descripcion.toString() );
            row.push( formatter.format(data.precio_unitario).toString()  );
            row.push( formatter.format((data.precio_unitario * data.cantidad)).toString() );
            // row.push( data.medida.toString() );
            body.push(row);
            bodyx.push(row);
            
            // Calcula Totales
            subtotalPDF = subtotalPDF + (data.precio_unitario * data.cantidad);
        }
    }

    subtotalPDF = subtotalPDF - descuentoPDF;
    ivaPDF = subtotalPDF * (this.newProject.controls["iva"].value / 100);
    totalPDF = subtotalPDF + ivaPDF;

    totalLetra = (this.newProject.controls["moneda"].value == 'MXN') ? this.numeroALetras(totalPDF, 'PESOS MEXICANOS') : this.numeroALetras(totalPDF, 'DOLARES AMERICANOS') 

    ciudadEstado = (this.newProject.controls["enviaACd"].value.length > 0 && this.newProject.controls["enviaAEstado"].value.length > 0) ? this.newProject.controls["enviaACd"].value + ' ' + this.newProject.controls["enviaAEstado"].value : ''

    // {
    //   text: 'LOGO DE ORDEN DE COMPRA', fontSize:8
    // }

    const documentDefinition = {
      content: [
        {
          columns: [
            { 
              // image: this.getBase64ImageFromURL('https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be'),
              image: this.logoCCC,
              width: 100,
              height: 50,
            },
            {
              text: '', fontSize:8, width: 20
            },
            {
              text: 'COMMERCIAL CONTRACTING DE MEXICO, S DE RL DE CV      Carretera a Saltillo-Monterrey Km. 18                                       Parque Industrial Santa María 25903 Ramos Arízpe, Coahuila Telefono: (844) 866 9030 RFC: CCM-950330-P1A', fontSize:8, width: 230
            },
            {
              text: '', fontSize:8, width: 20
            },
            {
              text: '', fontSize:8 // ORDEN DE COMPRA No. 1791-SUB232
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: '*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Proveedor:', fontSize:8, bold:true
            },
            {
              text: '', fontSize:8, width: 20
            },
            {
              text: '', fontSize:8
            },
            {
              text: '', fontSize:8, width: 20
            },
            {
              text: 'Enviar a:', fontSize:8, bold:true
            }
          ]
        },
        {
          columns: [
            {
              text: 'Nombre: ', fontSize:8, bold:true, width: 90
            },
            {
              text: (arrayProveedor.length > 0) ? arrayProveedor[0]["nombre"] : 'NA', fontSize:8, width: '*'
            },
            {
              text: 'Nombre: ', fontSize:8, bold:true, width: 90
            },
            {
              text: (this.newProject.controls["enviaANombre"].value.length > 0) ? this.newProject.controls["enviaANombre"].value : '', fontSize:8, width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Dirección: ', fontSize:8, bold:true, width: 90
            },
            {
              text: (arrayProveedor.length > 0) ? arrayProveedor[0]["direccion"] : 'NA', fontSize:8, width: '*'
            },
            {
              text: 'Dirección: ', fontSize:8, bold:true, width: 90
            },
            {
              text: (this.newProject.controls["enviaADireccion"].value.length > 0) ? this.newProject.controls["enviaADireccion"].value : '', fontSize:8, width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'R.F.C. ', fontSize:8, bold:true, width: 90
            },
            {
              text: (arrayProveedor.length > 0) ? arrayProveedor[0]["rfc"] : 'NA', fontSize:8, width: '*'
            },
            {
              text: 'Cd./Edo: ', fontSize:8, bold:true, width: 90
            },
            {
              text: ciudadEstado, fontSize:8, width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Cd./Edo: ', fontSize:8, bold:true, width: 90
            },
            {
              text: ((arrayProveedor.length > 0) ? arrayProveedor[0]["ciudad"] : 'NA') + ', ' + ((arrayProveedor.length > 0) ? arrayProveedor[0]["estado"] : ''), fontSize:8, width: '*'
            },
            {
              text: 'Requisitor: ', fontSize:8, bold:true, width: 90
            },
            {
              text: (this.newProject.controls["enviaARequisitor"].value.length > 0) ? this.newProject.controls["enviaARequisitor"].value : '', fontSize:8, width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Contacto ', fontSize:8, bold:true, width: 90
            },
            {
              text: (arrayProveedor.length > 0) ? arrayProveedor[0]["contacto"] : 'NA', fontSize:8, width: '*'
            },
            {
              text: 'Teléfono: ', fontSize:8, bold:true, width: 90
            },
            {
              text: (this.newProject.controls["enviaATelefono"].value.length > 0) ? this.newProject.controls["enviaATelefono"].value : '', fontSize:8, width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            },
            {
              text: '', fontSize:8, width: '*'
            },
            {
              text: '', fontSize:8, bold:true, width: 90
            },
            {
              text: '', fontSize:8, width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Orden de compra ', fontSize:8, bold:true, width: 90
            },
            {
              text: this.newProject.controls['odc_Numero'].value, fontSize:8, width: '*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'FO ', fontSize:8, bold:true, width: 90
            },
            {
              text: (this.newProject.controls['codigo_requisicioninterna'].value.length > 0) ? this.newProject.controls['codigo_requisicioninterna'].value : '', fontSize:8, width: '*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Proyecto ', fontSize:8, bold:true, width: 90
            },
            {
              text: this.newProject.controls['odc_Numero'].value.substring(0, this.newProject.controls['odc_Numero'].value.indexOf('-')), fontSize:8, width: '*'
            }
          ]
        },
        {
          style: 'tableHeader', fontSize:8, width:'500px',
          table: {
            body: [
              ['FECHA ODC', 'TERMINOS Y CONDICIONES                                                                                                                                                                            .'],
              [moment(new Date, 'DD/MMMM/YYYY').format('DD/MMMM/YYYY'), terminosYCondiciones]
            ]
          }
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          fontSize:8, width:'100%',
          table: {
            widths: [ '*', '*', '*', '*', '*' ],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: body
        }
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: totalLetra, fontSize:8, bold:true, width: 300
            },
            // {
            //   text: '', fontSize:8, width: '*' // CIEN MIL PESOS 00/100 MN
            // },
            {
              text: '', fontSize:8, bold:true
            },
            {
              text: 'Subtotal', fontSize:8, bold:true, width: '*'
            },
            {
              text: formatter.format(subtotalPDF) , fontSize:8, alignment: 'right', width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: '', fontSize:8, bold:true, width: 280
            },
            {
              text: '', fontSize:8, width: '*'
            },
            {
              text: '', fontSize:8, bold:true
            },
            {
              text: 'Descuento', fontSize:8, bold:true, width: '*'
            },
            {
              text: formatter.format(descuentoPDF) , fontSize:8, alignment: 'right', width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: '', fontSize:8, bold:true, width: 280
            },
            {
              text: '', fontSize:8, width: '*'
            },
            {
              text: '', fontSize:8, bold:true
            },
            {
              text: 'IVA', fontSize:8, bold:true, width: '*'
            },
            {
              text: formatter.format(ivaPDF) , fontSize:8, alignment: 'right', width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: '', fontSize:8, bold:true, width: 280
            },
            {
              text: '', fontSize:8, width: '*'
            },
            {
              text: '', fontSize:8, bold:true
            },
            {
              text: 'Total', fontSize:8, bold:true, width: '*'
            },
            {
              text: formatter.format(totalPDF) , fontSize:8, alignment: 'right', width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, width: 20
            },
            { 
              image: this.logoDataBlanco,
              width: 50,
              height: 50,
            },
            {
              text: ' ', fontSize:8, width: 20
            },
            { 
              image: this.logoDataCompras,
              width: 100,
              height: 50,
            },
            {
              text: '', fontSize:8, width: 20
            },
            { 
              image: this.logoDataControlProy,
              width: 100,
              height: 50,
            },
            {
              text: '', fontSize:8, width: 20
            },
            { 
              // image: this.getBase64ImageFromURL('https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be'),
              image: this.logoDataUrl,
              width: 100,
              height: 50,
            }
          ]
        },
      
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
       
        {
          columns: [
            {
              text: '1. Entregar factura anexa con OC.', fontSize:8, bold:true, width: 300
            }
          ]
        },
        {
          columns: [
            {
              text: '2. La factura deberá presentar los siguientes datos:', fontSize:8, bold:true, width: 300
            }
          ]
        },
        {
          columns: [
            {
              text: ' Banco:BBVA Bancomer                                                     Método de pago: 03 Transferencia Electrónica        Últimos digitos de la cuenta: 9673', fontSize:8, bold:true, width: 200
            }
          ]
        },
        {
          columns: [
            {
              text: '3. Enviar factura electrónica PDF Y XML al siguiente correo:      facturas.ccm@cccnetwork.com', fontSize:8, bold:true, width: 300
            }
          ]
        },
        {
          columns: [
            {
              text: ' 4. No se pagaran facturas que no cumplan con estos requisitos', fontSize:8, bold:true, width: 300
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
        {
          columns: [
            {
              text: ' ', fontSize:8, bold:true, width: 90
            }
          ]
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 11,
          color: 'black'
        },
        tableFooter: {
          bold: true,
          fontSize: 13,
          color: 'black',
          border: false
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    };

    pdfMake.createPdf(documentDefinition).open();
     
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
        this.newProject.controls["odc_Numero"].setValue(codigo_cotizacion + '-' + this.po_count.toString());
        
        
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

    this.cotizacionId = this.newProject.controls["cotizacion_id"].value;

    table.forEach(element => {

      //Hdr
      if(conteo == 0){
        console.log('element.cotizacion_id', this.cotizacionId);
        arrayTodb = {codigo : this.odc_Numero
                  , cotizacion_id : (this.cotizacionId == undefined) ? 0 : this.cotizacionId
                  , proveedor_id : this.newProject.controls["proveedor_id"].value // this.proveedor_id
                  , fecha : moment(new Date, 'YYYY-M-DD')
                  , iva : this.iva
                  , iva_moneda : this.ivaSubtotal
                  , tipo_moneda : 'MXN'
                  , sub_total : this.subtotal
                  , total : this.total
                  , descuento_global : this.newProject.controls["descuentoGlobal"].value
                  , terminos_condiciones : this.newProject.controls["terminoYCondiciones"].value
                  , destino_nombre : this.newProject.controls["enviaANombre"].value
                  , destino_direccion : this.newProject.controls["enviaADireccion"].value
                  , destino_ciudad : this.newProject.controls["enviaACd"].value
                  , destino_estado : this.newProject.controls["enviaAEstado"].value
                  , destino_cp : (this.newProject.controls["destinoCP"].value.toString().length == 0 || this.newProject.controls["destinoCP"].value.toString() == '' || this.newProject.controls["destinoCP"].value == 0) ? 0 : this.newProject.controls["destinoCP"].value
                  , destino_requisitor : this.newProject.controls["enviaARequisitor"].value
                  , destino_telefono : (this.newProject.controls["enviaATelefono"].value.toString().length == 0 || this.newProject.controls["enviaATelefono"].value.toString() == '' || this.newProject.controls["enviaATelefono"].value == 0) ? 0 : this.newProject.controls["enviaATelefono"].value
                  , fo : (this.newProject.controls["codigo_requisicioninterna"].value.length > 0) ? this.newProject.controls["codigo_requisicioninterna"].value : ''
                  , retencion : 4
                  , retencion_monto : 100
                }
      }

      //Detalle
      if(element.activo == true)
      {
        arrayDetail.push( {ordendecompradetalle_id : 0
                            , ordendecompra_id : this.ordendecompra_id
                            , cotizaciondetalle_id : (element.cotizaciondetalle_id != undefined) ? element.cotizaciondetalle_id : 0 
                            , sku : element.sku
                            , medida : (element.medida != undefined) ? element.medida : ''
                            , color : (element.color != undefined) ? element.color : ''
                            , otras_especificaciones : (element.otras_especificaciones != undefined) ? element.otras_especificaciones : ''
                            , cantidad : element.cantidad
                            , unidad_medida : element.unidad_medida
                            , costo : (element.costo != undefined) ? element.costo : 0
                            , precio_unitario : element.precio_unitario
                            , importe_total : element.cantidad * (element.precio_unitario - 0)
                            , descuento : element.descuento
                            , descripcion : element.descripcion
                            , nota : 'NOTAS INSERT' });
      }
      console.log('elemento', element)
      conteo++;
    });

    console.log('encabezado', arrayTodb)
    console.log('detalle', arrayDetail)

    this._purchaseOrderservice.insertPO_Hdr(arrayTodb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
  
        // INSERTA REQUISICIONES DET
        this.insertPODet(res, arrayDetail);

        //INSERTA EN BITACORA
        this.insertODCStatus(res);

        this.dialogRef.close();
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  updatePOHdr(table : any){
    let arrayTodb : any;
    let arrayDetail : any[] = [];
    let conteo : number = 0;

    this.cotizacionId = this.newProject.controls["cotizacion_id"].value;

    table.forEach(element => {

      //Hdr
      if(conteo == 0){
        console.log('element.cotizacion_id', this.projectInfo);
        arrayTodb = {
                  purchaseorder_id : this.projectInfo.ordendecompra_id
                  , codigo : this.newProject.controls['odc_Numero'].value
                  , cotizacion_id : (this.cotizacionId == undefined) ? 0 : this.cotizacionId
                  , proveedor_id : this.newProject.controls["proveedor_id"].value
                  , fecha : moment(new Date, 'YYYY-M-DD')
                  , iva : this.iva
                  , iva_moneda : this.ivaSubtotal
                  , tipo_moneda : this.newProject.controls['moneda'].value
                  , sub_total : this.subtotal
                  , total : this.total
                  , descuento_global : this.newProject.controls["descuentoGlobal"].value
                  , terminos_condiciones : this.newProject.controls["terminoYCondiciones"].value
                  , destino_nombre : this.newProject.controls["enviaANombre"].value
                  , destino_direccion : this.newProject.controls["enviaADireccion"].value
                  , destino_ciudad : this.newProject.controls["enviaACd"].value
                  , destino_estado : this.newProject.controls["enviaAEstado"].value
                  , destino_cp : (this.newProject.controls["destinoCP"].value.toString().length == 0 || this.newProject.controls["destinoCP"].value.toString() == '' || this.newProject.controls["destinoCP"].value == 0) ? 0 : this.newProject.controls["destinoCP"].value
                  , destino_requisitor : this.newProject.controls["enviaARequisitor"].value
                  , destino_telefono : (this.newProject.controls["enviaATelefono"].value.toString().length == 0 || this.newProject.controls["enviaATelefono"].value.toString() == '' || this.newProject.controls["enviaATelefono"].value == 0) ? 0 : this.newProject.controls["enviaATelefono"].value
                  , fo : (this.newProject.controls["codigo_requisicioninterna"].value.length > 0) ? this.newProject.controls["codigo_requisicioninterna"].value : ''
                  , retencion : 6
                  , retencion_monto : 200
                }

                this._purchaseOrderservice.updatePO_Hdr(arrayTodb).subscribe(
                  res=> {
                    console.log('Se inserto con éxito', res);
              
                    // // INSERTA REQUISICIONES DET
                    // this.insertPODet(res, arrayDetail);
            
                    //INSERTA EN BITACORA
                    this.insertODCStatus(res);
            
                    this.dialogRef.close();
                  },
                  error => console.log("error alta de proyectos",error)
                )
      }

      // //Detalle
      // if(element.activo == true)
      // {
      //   arrayDetail.push( {ordendecompradetalle_id : 0
      //                       , ordendecompra_id : this.ordendecompra_id
      //                       , cotizaciondetalle_id : (element.cotizaciondetalle_id != undefined) ? element.cotizaciondetalle_id : 0 
      //                       , sku : element.sku
      //                       , medida : (element.medida != undefined) ? element.medida : ''
      //                       , color : (element.color != undefined) ? element.color : ''
      //                       , otras_especificaciones : (element.otras_especificaciones != undefined) ? element.otras_especificaciones : ''
      //                       , cantidad : element.cantidad
      //                       , unidad_medida : element.unidad_medida
      //                       , costo : (element.costo != undefined) ? element.costo : 0
      //                       , precio_unitario : element.precio_unitario
      //                       , importe_total : element.cantidad * (element.precio_unitario - 0)
      //                       , descuento : element.descuento
      //                       , descripcion : element.descripcion });
      // }
      console.log('elemento', element)
      conteo++;
    });

    console.log('arrelo a actualizar', arrayTodb)

  }

  insertPODet(po_id : any, arrayDetail : any){

    let arrayTodbDetail : any;
    this.loading = true;
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
                        , precio_unitario : element.precio_unitario 
                        , importe_total : element.cantidad * (element.precio_unitario - 0)
                        , descuento : element.descuento
                        , descripcion : element.descripcion
                        , nota : 'NOTAS DEL INSERT' }
    
                        console.log('detalle', arrayTodbDetail);

    this._purchaseOrderservice.insertPODetail(arrayTodbDetail).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        this.showMessage(2, 'Exitoso', 'success', 'Se creo una nueva orden de compra', 'Cerrar');
  
      },
      error => console.log("error alta de proyectos",error)
    )
    });
  }

  getsupplierAll(){
    // Selecciona todos los proveedores
    this._supplyservice.getsupplyAll().subscribe(
      res=> {
        this.datasourcesupplier = res;
        console.log('PROVEEDORES', this.datasourcesupplier);
      },
      error => console.log("error consulta categorias",error)
    )
  }

  getPO_Detail(po_id : any){
    // Selecciona ordenes de compra
    this._purchaseOrderservice.getPODetail(po_id).subscribe(
      res=> {
        this.datasourceCotizacionesDetalle = res;
        console.log('ORDENES DE COMPRA DET', this.datasourceCotizacionesDetalle);
      },
      error => console.log("error consulta categorias",error)
    )
  }

  getusers(){
    let arrayUsers : any;
    
    this._UserService.getUsersAll().subscribe(
      res=> {
        this.datasourceUsers = res;
        console.log('USUARIOS', this.datasourceUsers);
        arrayUsers = this.datasourceUsers.filter(e => e.nombreUsuario == this.usuarioId)
        this.UserIdLogin = Number(arrayUsers[0]["usuarioId"].toString());
      },
      error => console.log("error consulta categorias",error)
    )
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      // img.setAttribute("crossOrigin", "anonymous");

      // var express = require('express')
      // var cors = require('cors')
      // var app = express()
      // app.use(cors())
      
      img.crossOrigin = "Anonymous";

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;

    });
  }

  getImageDataUrlFromLocalPath1(localPath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas');
        let img = new Image();
        img.onload = () => {
            canvas.height = img.height;
            canvas.width = img.width;
            canvas.getContext("2d").drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/png'));
        }
        img.onerror = () => reject('Imagen no disponible')
        img.src = localPath;

    })

  }

  updateODCStatus(form){
    let arrayToDb : any;

    console.log('numero de orden de compra', this.projectInfo.ordendecompra_id)

    this.projectInfo.estado = this.UserIdLogin;

    arrayToDb = ({ordendecompra_id : this.projectInfo.ordendecompra_id , estatus : 3, usuario : this.UserIdLogin}) // this.usuarioId

    this._purchaseOrderservice.updatePOStatus(arrayToDb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        this.showMessage(2, 'Comentario', 'info', 'La autorización fue exitosa', 'Cerrar');
        this.dialogRef.close();
        
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  insertODCStatus(po_id : any){
    let arrayToDb : any;

    console.log('numero de orden de compra', this.usuarioId)

    arrayToDb = ({ordendecompra_id : po_id , estatus : 1, usuario : this.UserIdLogin}) // this.usuarioId

    this._purchaseOrderservice.insertPOStatus(arrayToDb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        this.loading = false;
      },
      error => console.log("error alta de proyectos",error)
    )
  }


// NUMEROS A LETRAS

Unidades(num){

  switch(num)
  {
      case 1: return 'UN';
      case 2: return 'DOS';
      case 3: return 'TRES';
      case 4: return 'CUATRO';
      case 5: return 'CINCO';
      case 6: return 'SEIS';
      case 7: return 'SIETE';
      case 8: return 'OCHO';
      case 9: return 'NUEVE';
  }

  return '';
}//Unidades()

Decenas(num){

  let decena = Math.floor(num/10);
  let unidad = num - (decena * 10);

  switch(decena)
  {
      case 1:
          switch(unidad)
          {
              case 0: return 'DIEZ';
              case 1: return 'ONCE';
              case 2: return 'DOCE';
              case 3: return 'TRECE';
              case 4: return 'CATORCE';
              case 5: return 'QUINCE';
              default: return 'DIECI' + this.Unidades(unidad);
          }
      case 2:
          switch(unidad)
          {
              case 0: return 'VEINTE';
              default: return 'VEINTI' + this.Unidades(unidad);
          }
      case 3: return this.DecenasY('TREINTA', unidad);
      case 4: return this.DecenasY('CUARENTA', unidad);
      case 5: return this.DecenasY('CINCUENTA', unidad);
      case 6: return this.DecenasY('SESENTA', unidad);
      case 7: return this.DecenasY('SETENTA', unidad);
      case 8: return this.DecenasY('OCHENTA', unidad);
      case 9: return this.DecenasY('NOVENTA', unidad);
      case 0: return this.Unidades(unidad);
  }
}//Unidades()

DecenasY(strSin, numUnidades) {
  if (numUnidades > 0)
      return strSin + ' Y ' + this.Unidades(numUnidades)

  return strSin;
}//DecenasY()

Centenas(num) {
  let centenas = Math.floor(num / 100);
  let decenas = num - (centenas * 100);

  switch(centenas)
  {
      case 1:
          if (decenas > 0)
              return 'CIENTO ' + this.Decenas(decenas);
          return 'CIEN';
      case 2: return 'DOSCIENTOS ' + this.Decenas(decenas);
      case 3: return 'TRESCIENTOS ' + this.Decenas(decenas);
      case 4: return 'CUATROCIENTOS ' + this.Decenas(decenas);
      case 5: return 'QUINIENTOS ' + this.Decenas(decenas);
      case 6: return 'SEISCIENTOS ' + this.Decenas(decenas);
      case 7: return 'SETECIENTOS ' + this.Decenas(decenas);
      case 8: return 'OCHOCIENTOS ' + this.Decenas(decenas);
      case 9: return 'NOVECIENTOS ' + this.Decenas(decenas);
  }

  return this.Decenas(decenas);
}//Centenas()

Seccion(num, divisor, strSingular, strPlural) {
  let cientos = Math.floor(num / divisor)
  let resto = num - (cientos * divisor)

  let letras = '';

  if (cientos > 0)
      if (cientos > 1)
          letras = this.Centenas(cientos) + ' ' + strPlural;
      else
          letras = strSingular;

  if (resto > 0)
      letras += '';

  return letras;
}//Seccion()

Miles(num) {
  let divisor = 1000;
  let cientos = Math.floor(num / divisor)
  let resto = num - (cientos * divisor)

  let strMiles = this.Seccion(num, divisor, 'UN MIL', 'MIL');
  let strCentenas = this.Centenas(resto);

  if(strMiles == '')
      return strCentenas;

  return strMiles + ' ' + strCentenas;
}//Miles()

Millones(num) {
  let divisor = 1000000;
  let cientos = Math.floor(num / divisor)
  let resto = num - (cientos * divisor)

  let strMillones = this.Seccion(num, divisor, 'UN MILLON', 'MILLONES');
  let strMiles = this.Miles(resto);

  if(strMillones == '')
      return strMiles;

  return strMillones + ' ' + strMiles;
}//Millones()

numeroALetras(num, currency) {
  currency = currency || {};
  let data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
      letrasCentavos: '',
      letrasMonedaPlural: currency.plural || currency,//'PESOS', 'Dólares', 'Bolívares', 'etcs'
      letrasMonedaSingular: currency.singular || currency, //'PESO', 'Dólar', 'Bolivar', 'etc'
      letrasMonedaCentavoPlural: currency.centPlural || 'CENTAVOS',
      letrasMonedaCentavoSingular: currency.centSingular || 'CENTAVO'
  };

  if (data.centavos > 0) {
      let centavos = ''
      if (data.centavos == 1)
          centavos = this.Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
      else
          centavos =  this.Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
      data.letrasCentavos = 'CON ' + centavos
  };

  if(data.enteros == 0)
      return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
  if (data.enteros == 1)
      return this.Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
  else
      return this.Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
}

}


