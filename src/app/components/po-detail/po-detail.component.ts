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


// function numeroALetras() {
//   alert('Hello!!!');
// }

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
  usuarioId : any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatTable) tabla1: MatTable<any>;
  
  cotizacion_id : any = '';
  codigo_requisicioninterna : any = '';
  odc_Numero : any = '';
  proveedor_id : any = '';
  activoEdicion : boolean = true;
  displayedColumns = ['select', 'SKU', 'cantidad', 'unidad_de_medida', 'descripcion', 'medida', 'color', 'otras_Especificaciones', 'cantidad_Ordenar', 'precio_unitario', 'descuento']; // , 'importe'

  projectInfo : any;
  estadoPantalla : string;
  cotizacionId : any = 0;
  newProject: FormGroup;
  datasourceCotizaciones : any;
  datasourceCotizacionesDetalle : any;
  datasourcePoveedores : any[] = [];
  datasourcesupplier : any;
  datasourcePo_Detail : any;
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
  enviaANombre : any;
  enviaADireccion : any;
  enviaACdEstado : any;
  enviaARequisitor : any;
  enviaATelefono : any;
  logoCCC: any;

  constructor(
    public dialogRef: MatDialogRef<quotationDetailModel>
    , private _quotationservice : quotationservice
    , private _supplyservice : supplyservice
    , @Inject(MAT_DIALOG_DATA) public data
    , public snackBar: MatSnackBar
    , private formBuilder: FormBuilder
    , private _snackBar : MatSnackBar
    , private _purchaseOrderservice : purchaseOrderservice
    , public dialog: MatDialog
  ) { 
    this.projectInfo = data.arrayData;
    this.estadoPantalla = data.estadoPantalla;

    this.newProject = this.formBuilder.group({
      cotizacion_id : new FormControl('', [Validators.required]),
      codigo_requisicioninterna: new FormControl('', [Validators.required]),
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
      enviaACdEstado : new FormControl(''),
      enviaARequisitor : new FormControl(''),
      enviaATelefono : new FormControl(''),
  });

  }

  // =====================
  // PROCEDIMIENTOS
  // =====================

  ngOnInit(): void {

    // new name();
    
    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
      result => this.logoDataUrl = result
    )

    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/imgCompras.PNG').then(
      result => this.logoDataCompras = result
    )

    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/imgControlProyectos.PNG').then(
      result => this.logoDataControlProy = result
    )

    this.getImageDataUrlFromLocalPath1('../../../assets/images/background/logoCCC.PNG').then(
      result => this.logoCCC = result
    )

    this.decode();
    this.getsupplierAll();
    this.getProveedores();
    this.getCotizacionesAll();

    if(this.projectInfo != undefined){
      this.ordendecompra_id = this.projectInfo.proveedor_nombre
      this.subtotal = this.projectInfo.sub_total;
      this.ivaSubtotal = this.projectInfo.iva_moneda;
      this.total = this.projectInfo.total;

      // this.getcotizacionesDetail(this.projectInfo.cotizacion_id);
      this.getPO_Detail(this.projectInfo.ordendecompra_id);

      this.newProject.patchValue({
        cotizacion_id : this.projectInfo.cotizacion_id,
        codigo_requisicioninterna : this.projectInfo.codigo_requisicioninterna,
        odc_Numero : this.projectInfo.ordendecompra_codigo,
        proveedor_id : this.projectInfo.proveedor_id,
        iva : this.projectInfo.iva.toString(),
        moneda : this.projectInfo.tipo_moneda.toString(),
      })
      
    }
  }

  cotizacionSelected(form, event){
    this.getcotizacionesDetail(form.controls['cotizacion_id'].value);

  }

  ivaSelected(form, event){
    console.log('iva', form.controls['iva'].value);
    this.onBlurMethod();
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

  Authoriza(form, event){
      console.log('autoriza po', form);
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

      this.ivaSubtotal = this.ivaSubtotal + (this.subtotal * (this.iva/100));
      this.total = this.subtotal + this.ivaSubtotal;
    }
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
    console.log(jwt_decode(token));

    switch(decodeUser){
      case('pablo'):  this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be'; //this.decodedSign = 'https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be' //this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
                        result => this.logoDataUrl = result
                      )
        break;
      case('alejandro'): this.decodedSign = this.decodedSign + '36189034-32e5-4e28-b44c-43dec58e9999' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaAlejandro.PNG').then(
                        result => this.logoDataUrl = result
                      )
        break;
      case('bernardo'): this.decodedSign = this.decodedSign + '611d133a-d14a-45ab-a26a-f6e0dd570636' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBernardo.PNG').then(
                        result => this.logoDataUrl = result
                      )        
        break;
      case('fernando'): this.decodedSign = this.decodedSign + 'be146605-1624-48e9-b646-cf9dbfd4f7a8' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaFernando.PNG').then(
                        result => this.logoDataUrl = result
                      )   
        break;
      default: this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be'; // this.decodedSign = 'https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be' //this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be' 
                    // this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBlanco.PNG').then(              
                    this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
                      result => this.logoDataUrl = result
                    )
        break;
    }

    this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be'; //this.decodedSign = 'https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be' //this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be' 
                      this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(
                        result => this.logoDataUrl = result
                      )
    console.log('this.decodedSign', this.decodedSign)
  }
  
  public async downloadAsPDF() {
    let subtotalPDF : number = 0;
    let ivaPDF : number = 0;
    let totalPDF : number = 0;

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

    ivaPDF = subtotalPDF * (this.newProject.controls["iva"].value / 100);
    totalPDF = subtotalPDF + ivaPDF;

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
              text: 'COMERCIAL ... S. DE R.L. DE C.V. RFC: CCM95033..A Carretera a Saltillo-Monterrey Km. 18 Parque Industrial Santa María 25900 Ramos Arízpe, Coahuila Telefono: (844) 866 9030', fontSize:8
            },
            {
              text: '', fontSize:8, width: 20
            },
            {
              text: 'ORDEN DE COMPRA No. 1791-SUB232', fontSize:8
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
              text: (this.newProject.controls["enviaANombre"].value.length > 0) ? this.newProject.controls["enviaANombre"].value : 'NA', fontSize:8, width:'*'
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
              text: (this.newProject.controls["enviaADireccion"].value.length > 0) ? this.newProject.controls["enviaADireccion"].value : 'NA', fontSize:8, width:'*'
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
              text: (this.newProject.controls["enviaACdEstado"].value.length > 0) ? this.newProject.controls["enviaACdEstado"].value : 'NA', fontSize:8, width:'*'
            }
          ]
        },
        {
          columns: [
            {
              text: 'Cd./Edo: ', fontSize:8, bold:true, width: 90
            },
            {
              text: ((arrayProveedor.length > 0) ? arrayProveedor[0]["ciudad"] : 'NA') + ', ' + ((arrayProveedor.length > 0) ? arrayProveedor[0]["estado"] : 'NA'), fontSize:8, width: '*'
            },
            {
              text: 'Requisitor: ', fontSize:8, bold:true, width: 90
            },
            {
              text: (this.newProject.controls["enviaARequisitor"].value.length > 0) ? this.newProject.controls["enviaARequisitor"].value : 'NA', fontSize:8, width:'*'
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
              text: (this.newProject.controls["enviaATelefono"].value.length > 0) ? this.newProject.controls["enviaATelefono"].value : 'NA', fontSize:8, width:'*'
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
              text: ': ', fontSize:8, bold:true, width: 90
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
          style: 'tableHeader', fontSize:8, width:'100%',
          table: {
            body: [
              ['FECHA ODC', 'TERMINOS Y CONDICIONES'],
              [moment(new Date, 'DD/MMMM/YYYY').format('DD/MMMM/YYYY'), 'Estimación por avance']
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
              text: '', fontSize:8, bold:true
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
              text: '', fontSize:8, bold:true
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
              text: '', fontSize:8, bold:true
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
        // {
        //   columns: [
        //     {
        //       text: '_________________', fontSize:8, bold:true
        //     },
        //     {
        //       text: '', fontSize:8, width: 20
        //     },
        //     {
        //       text: '_________________', fontSize:8
        //     },
        //     {
        //       text: '', fontSize:8, width: 20
        //     },
        //     {
        //       text: '_________________', fontSize:8, bold:true
        //     }
        //   ]
        // },
        // {
        //   columns: [
        //     {
        //       text: 'Compras', fontSize:8, bold:true
        //     },
        //     {
        //       text: '', fontSize:8, width: 20
        //     },
        //     {
        //       text: 'Control de proyectos', fontSize:8
        //     },
        //     {
        //       text: '', fontSize:8, width: 20
        //     },
        //     {
        //       text: 'Autorizar', fontSize:8, bold:true
        //     }
        //   ]
        // },
        {
          columns: [
            {
              text: '', fontSize:8, width: 20
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

    table.forEach(element => {

      //Hdr
      if(conteo == 0){
        arrayTodb = {codigo : this.odc_Numero
                  , cotizacion_id : element.cotizacion_id
                  , proveedor_id : this.newProject.controls["proveedor_id"].value // this.proveedor_id
                  , fecha : moment(new Date, 'YYYY-M-DD')
                  , iva : this.iva
                  , iva_moneda : this.ivaSubtotal
                  , tipo_moneda : 'MXN'
                  , sub_total : this.subtotal
                  , total : this.total
                }
      }

      //Detalle
      if(element.activo == true)
      {
        console.log('tabla', element.precio_unitario)
        console.log('pu', element.precio_unitario)

        arrayDetail.push( {ordendecompradetalle_id : 0
                            , ordendecompra_id : this.ordendecompra_id
                            , cotizaciondetalle_id : element.cotizaciondetalle_id
                            , sku : element.sku
                            , medida : element.medida
                            , color : element.color
                            , otras_especificaciones : element.otras_especificaciones
                            , cantidad : element.cantidad
                            , unidad_medida : element.unidad_medida
                            , costo : element.costo
                            , precio_unitario : element.precio_unitario
                            , importe_total : element.cantidad * (element.precio_unitario - element.descuento)
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

        //INSERTA EN BITACORA
        this.updateODCStatus(res);
        this.dialogRef.close();
      },
      error => console.log("error alta de proyectos",error)
    )
  }

  insertPODet(po_id : any, arrayDetail : any){

    let arrayTodbDetail : any;

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
                        , importe_total : element.cantidad * (element.precio_unitario - element.descuento)
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

        console.log('path', localPath);
    })

  }

  updateODCStatus(form){
    let arrayToDb : any;

console.log('numero de orden de compra', this.projectInfo.ordendecompra_id)

    arrayToDb = ({ordendecompra_id : this.projectInfo.ordendecompra_id , estatus : 1, usuario : 2}) // this.usuarioId

    this._purchaseOrderservice.updatePOStatus(arrayToDb).subscribe(
      res=> {
        console.log('Se inserto con éxito', res);
        
      },
      error => console.log("error alta de proyectos",error)
    )
  }

}
