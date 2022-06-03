import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as moment from 'moment';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { CategoriesComponent } from 'src/app/components/categories/categories/categories.component';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { poModel } from 'src/app/models/po.model';
import { purchaseOrderservice } from 'src/app/services/PurchaseOrder.service';
import { PoDetailComponent } from 'src/app/components/po-detail/po-detail.component';

import jsPDF from 'jspdf';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import jwt_decode from "jwt-decode";
import { supplyservice } from '../../../services/supplier.service';
import { quotationservice  } from 'src/app/services/quotation/quotation.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { element } from 'protractor';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

@Component({
  selector: 'app-po-list',
  templateUrl: './po-list.component.html',
  styleUrls: ['./po-list.component.css']
})
export class PoListComponent implements OnInit {
  // =====================
  // DECLARACIONES
  // =====================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<poModel>

  @ViewChild('pdfTable') pdfTable: ElementRef;
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['ordendecompra_id', 'ordendecompra_codigo', 'cotizacion_codigo', 'proveedor_nombre', 'ordendecompra_fecha', 'Estatus', 'editar', 'cancelar', 'autorizar', 'pdf'];
  
  buscar:any;
  logoDataUrl : string;
  logoDataCompras : string;
  logoDataControlProy : string;
  logoDataBlanco : string;
  logoDataBlancoODC : string;
  logoCCC: any;
  decodedSign : any;
  usuarioId : any;
  datasourcesupplier : any;
  datasourcePoveedores : any[] = [];
  datasourceCotizaciones : any;
  datasourceCotizacionesDetalle : any;
  UserIdLogin : number;
  datasourceUsers : any;

  constructor(public dialog: MatDialog
          , private _excelService : ExcelServiceService
          , private _purchaseOrderService : purchaseOrderservice
          , private _supplyservice : supplyservice
          , private _quotationservice : quotationservice
          , private _UserService : UserService) { }


  // =====================
  // PROCEDIMIENTOS
  // =====================

  ngOnInit(): void {
    
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

    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBlancoOrdenesDeCompra.png' ).then(
      result => this.logoDataBlancoODC = result
    )

    this.getsupplierAll();
    this.getProveedores();
    this.getCotizacionesAll();
    this.getPO_Hdr();
    this.decode();
  }

  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({proyecto_id : element.proyecto_id
                              , categoria : element.codigo_proyectocategoria
                              , requisicion : element.requisicioninterna_id
                              , Fecha_Requisicion : moment(element.Fecha_Requisicion, 'YYYY-MM-DD').format('DD-MM-YYYY')
                              , estatus : element.estado
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');  
  }

  nuevaOrdenDeCompra(event){
    console.log('Alta de requisiciones');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'ORDEN DE COMPRA',
      arrayData : null,
      requisicionId: 1,
      estadoPantalla : 'new'
     
    }
    dialogConfig.width = '1500px';
    dialogConfig.height = '9000px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(PoDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getPO_Hdr();
    });
  }

  editRequisicion(element, event){
    console.log('Alta de requisiciones');

    const dialogConfig = new MatDialogConfig();

    console.log('autoriza registro', element);
    dialogConfig.data = {
      id: 1,
      title: 'REQUISICIONES',
      arrayData : element,
      requisicionId: 1,
      estadoPantalla : 'edition'
     
    }
    dialogConfig.width = '1500px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(PoDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getPO_Hdr();
    });
  }

  aproveODC(element, event){
    console.log('Aprueba orden de compra');

    const dialogConfig = new MatDialogConfig();

    console.log('aprueba odc', element)

    dialogConfig.data = {
      id: 1,
      title: 'ORDEN DE COMPRA',
      arrayData : element,
      requisicionId: 1,
      estadoPantalla : 'aprove',
     
    }
    dialogConfig.width = '1500px';
    dialogConfig.height = '9000px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(PoDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getPO_Hdr();
    });
  }

  cancelaODC(element, event : Event){
    this.updateODCStatus(element, 4);
  }

  printPDF(element, event){
    console.log('elemento', element);

    console.log('element.nombre_usuario', element.nombre_usuario)

    switch(element.nombre_usuario){
      case('pablo'):  this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be';
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
      default: this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be';
                    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBlanco.PNG').then(
                      result => this.logoDataUrl = result
                    )
        break;
    }

    console.log('aaaaqui estan las firmas', element.nombre_usuario)

    this.generaPDF(element);
  }

  // =====================
  // UTILERIAS
  // =====================

  // public downloadAsPDF() {
  //   const doc = new jsPDF();
   
  //   const pdfTable = this.pdfTable.nativeElement;
   
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
  //   // var html = htmlToPdfmake(AllTable.innerHTML);
     
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open(); 
     
  // }

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

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
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

  // =====================
  // CONSILTA DE SERVICIOS
  // =====================

  getCotizacionesAll(){
    this._quotationservice.getQuotationAll().subscribe(
      res=> {
        this.datasourceCotizaciones = res;
        console.log('COTIZACIONES TODAS', res);
  
      },
      error => console.log("error consulta proyectos",error)
    )
  }

  getcotizacionesDetail(cotizacion_id : any, element){
    this._quotationservice.getQuotationDetail(cotizacion_id).subscribe(
      res=> {
        this.datasourceCotizacionesDetalle = res;
        console.log('COTIZACIONES TODAS', res);
        this.downloadAsPDF(element);
  
      },
      error => console.log("error consulta proyectos",error)
    )
  }
  getProveedores(){

    let arrayProvider : any [];

    arrayProvider = [];
    arrayProvider.push({proveedor_id : 1, proveedor_nombre : 'CABLES MONTERREY SA DE CV'},
                    {proveedor_id : 2, proveedor_nombre : 'VENTA DE CABLEADO SA'}
                    )

    this.datasourcePoveedores = arrayProvider;

    console.log(this.datasourcePoveedores);
  }


  getPO_Hdr(){

    let arraySort: any;

    // Proyectos registrados
    this._purchaseOrderService.getPOAll().subscribe(
      res=> {
        console.log('PurchaseOrder', res);

        // Ordenado de arreglo
        arraySort = res.sort(function (a, b) {
          if (a.ordendecompra_id < b.ordendecompra_id) {
            return 1;
          }
          if (a.ordendecompra_id > b.ordendecompra_id) {
            return -1;
          }
          return 0;
        });
        
        this.dataSourceShow = new MatTableDataSource(arraySort);
        this.array = res;
        this.totalSize = this.array.length;
        
        this.iterator();
        this.dataSourceShow.sort = this.sort;
        
      },
      error => console.log("error consulta regiones",error)
    )
  }

  cancelODCToDB(element){
    this._purchaseOrderService.putPOCancel(element.ordendecompra_id).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  updateODCStatus(element, statusToDb){
    let arrayToDb : any;

    arrayToDb = ({ordendecompra_id : element.ordendecompra_id, estatus : statusToDb, usuario : this.UserIdLogin})

    console.log('cancelado', element)

    this._purchaseOrderService.putPOCancel(element.ordendecompra_id).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        
        //INSERTA EN BITACORA
        this.insertODCStatusBitacora(element.ordendecompra_id);

        this.getPO_Hdr();
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  insertODCStatusBitacora(po_id : any){
    let arrayToDb : any;

    console.log('numero de orden de compra', this.usuarioId)

    arrayToDb = ({ordendecompra_id : po_id , estatus : 4, usuario : this.UserIdLogin}) // this.usuarioId

    this._purchaseOrderService.insertPOStatus(arrayToDb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
      },
      error => console.log("error alta de proyectos",error)
    )
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

  // ====================
  // GENERA REPORTE PDF
  // ====================

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

        console.log('path', localPath);
    })

  }

  decode(){
    let token = localStorage.getItem('token_access');
    this.decodedSign = jwt_decode(token)["firma"] + '?alt=media&token='; 
    let decodeUser = jwt_decode(token)["usuario"];
    let decodeId = jwt_decode(token);
    
    this.usuarioId = decodeUser;
    this.getusers();

    // switch(decodeUser){
    //   case('pablo'):  this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be';
    //                   this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
    //                     result => this.logoDataUrl = result
    //                   )
    //     break;
    //   case('alejandro_fuentes'): this.decodedSign = this.decodedSign + '36189034-32e5-4e28-b44c-43dec58e9999' 
    //                   this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaAlejandro.PNG').then(
    //                     result => this.logoDataUrl = result
    //                   )
    //     break;
    //   case('bernardo_tamez'): this.decodedSign = this.decodedSign + '611d133a-d14a-45ab-a26a-f6e0dd570636' 
    //                   this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBernardo.PNG').then(
    //                     result => this.logoDataUrl = result
    //                   )        
    //     break;
    //   case('fernando_chavez'): this.decodedSign = this.decodedSign + 'be146605-1624-48e9-b646-cf9dbfd4f7a8' 
    //                   this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaFernando.PNG').then(
    //                     result => this.logoDataUrl = result
    //                   )   
    //     break;
    //   default: this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be';
    //                 this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
    //                   result => this.logoDataUrl = result
    //                 )
    //     break;
    // }

    // this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be';
    //                   this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
    //                     result => this.logoDataUrl = result
    //                   )
    console.log('this.decodedSign', this.decodedSign)
  }

  generaPDF(element){
    this.getPO_Det(element)
    // this.getcotizacionesDetail(element.cotizacion_id, element);
  }

  datsourcePoDetail : any;

  getPO_Det(element){
    this._purchaseOrderService.getPODetail(element.ordendecompra_id).subscribe( //.getQuotationDetail(cotizacion_id).subscribe(
      res=> {
        console.log('ORDEN DE COMPRA DETALLE', res);
        this.datsourcePoDetail = res;
        this.downloadAsPDF(element);
  
      },
      error => console.log("error consulta proyectos",error)
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
  
  public async downloadAsPDF(element) {

    console.log('afuera')
    if(element.estado != 3){
      console.log('entre')
      this.showMessage(1, 'Alerta', 'error', 'Para imprimir la orden de compra es necesario autorizarla', 'Cerrar');
      return;
    }

    let subtotalPDF : number = Number(element.sub_total);
    let ivaPDF : number = Number(element.iva_moneda);
    let totalPDF : number = Number(Number(element.sub_total) + Number(element.iva_moneda));
    let totalPDFLetra : string = (element.tipo_moneda == 'MXN') ? this.numeroALetras(totalPDF, 'PESOS MEXICANOS') : this.numeroALetras(totalPDF, 'PESOS MEXICANOS');
    let ciudadEstado : string;
    let terminosYCondiciones : string = element.terminos_condiciones
    let descuentoPDF : number = Number(element.descuento_global);

    const doc = new jsPDF();   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);

    let arrayProveedor = this.datasourcesupplier.filter(e => e.proveedorid == element.proveedor_id) 
    
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

    console.log('orden de compra detalle', this.datsourcePoDetail)

    for (var key in this.datsourcePoDetail) {
        if (this.datsourcePoDetail.hasOwnProperty(key))
        {
            var data = this.datsourcePoDetail[key];
            var row = new Array();
            row.push( data.cantidad.toString() );
            row.push( data.unidad_medida.toString()  );
            row.push( data.descripcion.toString() );
            row.push( formatter.format(data.precio_unitario).toString()  );
            row.push( formatter.format((data.precio_unitario * data.cantidad)).toString() );
            body.push(row);
            bodyx.push(row);            
        }
    }

    ciudadEstado = (element.destino_ciudad.length > 0 && element.destino_estado.length > 0) ? element.destino_ciudad + ' ' + element.destino_estado : ''

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
              text: ' ', fontSize:8 // ORDEN DE COMPRA No. 1791-SUB232
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
              text: (element.destino_nombre.length > 0) ? element.destino_nombre : '', fontSize:8, width:'*'
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
              text: (element.destino_direccion.length > 0) ? element.destino_direccion : '', fontSize:8, width:'*'
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
              text: (element.destino_requisitor.length > 0) ? element.destino_requisitor : '', fontSize:8, width:'*'
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
              text: (element.destino_telefono.toString().length > 0 && element.destino_telefono.toString() != '0') ? element.destino_telefono : '', fontSize:8, width:'*'
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
              text: element.ordendecompra_codigo, fontSize:8, width: '*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'FO ', fontSize:8, bold:true, width: 90
            },
            {
              text: element.fo, fontSize:8, width: '*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Proyecto ', fontSize:8, bold:true, width: 90
            },
            {
              text: element.ordendecompra_codigo.substring(0, element.ordendecompra_codigo.indexOf('-')), fontSize:8, width: '*'
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
              text: totalPDFLetra, fontSize:8, bold:true, width: 280
            },
            {
              text: '', fontSize:8, width: '*' // CIEN MIL PESOS 00/100 MN
            },
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
              // image: this.logoDataUrl,
              image: (element.estado == 1 || element.estado == 2) ? this.logoDataBlancoODC : this.logoDataUrl,
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

    console.log('documentDefinition', documentDefinition);

    pdfMake.createPdf(documentDefinition).open();
     
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
