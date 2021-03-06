import { Component, EventEmitter, Inject, Injectable, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { SupplierDetailComponent } from 'src/app/components/supplier-detail/supplier-detail.component';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { RepseSupplierReviewDetailComponent } from '../../../components/repse-supplier-review-detail/repse-supplier-review-detail.component';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY } from '@angular/material/autocomplete';
import { RepseReviewAproveComponent } from '../repse-review-aprove/repse-review-aprove.component';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';
import { Storage, uploadBytes } from '@angular/fire/storage';
import { getStorage, ref, listAll, getDownloadURL, StorageReference, UploadTask, FirebaseStorage } from "firebase/storage";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { finalize } from 'rxjs/operators';


// function traductorPitufo(url: string): string {  
//   document.execCommand('SaveAs',true,url);
//   return "Pitufos";  
// }

const storage = getStorage();

@Component({
  selector: 'app-repse-review-mensual',
  templateUrl: './repse-review-mensual.component.html',
  styleUrls: ['./repse-review-mensual.component.css']
})
export class RepseReviewMensualComponent implements OnInit {
// =================
// DECLARACIONES
// =================

// Para paginaci??n
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<supplierModel>
pageInfo : any;
providerId : number;
arraySupplierGlobal : any = [];
usuarioId : string;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['supplier_id', 'documento', 'estatus', 'ver', 'revision', 'descarga'];

  public newForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<supplierModel>
    , public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice
    , private _UploadFileService : UploadFileService
    , @Inject(MAT_DIALOG_DATA) public data
    , private http: HttpClient
    , private downloads: DownloadService
    , private formBuilder: FormBuilder
    ) { 
      this.pageInfo = data.arrayData;

      this.newForm = this.formBuilder.group({
        anio: new FormControl('', [Validators.required]),
        mes: new FormControl('', [Validators.required])
      })
    }

  // =================
  // PROCEDIMIENTOS
  // =================


  ngOnInit(): void {
    this.decode();
    console.log('aqui empieza todo', this.pageInfo)
    this.providerId = this.pageInfo.proveedorid;

    // this.getsupplierDocuments();
  }
  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];

  this.dataSourceShow.filteredData.forEach(element => {
    dataSourceShowToExcel.push({
                              nombre : element.nombre
                              , direccion : element.direccion
                              , RFC : element.rfc
                              , estatus : element.estado
      })
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proveedores');  
  }

  review(element, event){
    // AUTORIZA O RECHAZA
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'APROBAR/DENEGAR ARCHIVO',
      arrayData : element,
      proveedorId: element.proveedorId,
      idDocumento: element.idDocumento,
      estadoPantalla: 'Edit'
     
    }
    
    dialogConfig.width = '550px';
    dialogConfig.height = '300px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(RepseReviewAproveComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
      this.getsupplierDocuments();
    });
  }

  view(element, event){
    window.open(element.url);
    // this.getImage();
  }

  filtrar(event : Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
  }

  save(event){

  }

  cancel(event){
    this.dialogRef.close();
  }

  decode(){
    let token = localStorage.getItem('token_access');
    let decodeUser = jwt_decode(token)["usuario"];
    // let decodeProveedorId = jwt_decode(token)["proveedor_id"];
    this.usuarioId = decodeUser;
    console.log('usuarioId', this.usuarioId)
  
  }

  reactive(element, event){
    let arrayToDb : any;

    arrayToDb = ({idDocumento: element.idDocumento
                , estado: 0
               , comentarios: '' })

               console.log('aqui va el arreglo', arrayToDb)

    this.aproveRejectDocument(arrayToDb);
  }

  downloadFiles(form, event){
    this.downloadFilesGeneral(this.newForm.controls["anio"].value, this.newForm.controls["mes"].value, 'mensuales')
  }

  // =================
  // UTILERIAS
  // =================
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

  search(form, event){
    this.getsupplierDocuments();
  }



  downloadURL : Observable<string>  

  downloadFilesGeneral(anio : number, mes : number, tipo : string){
  
    // const imagesRef = ref(this.storage, 'documentos/generales/1');
    // Create a reference under which you want to list
    const listRef = ref(storage, 'documentos/generales/1');

    //let binaryData : any = []
    let dataType = 'pdf';
    let fileName = 'Nombre'
    let fileNameCompleto : string;
    let filePath : string;

    switch(tipo){
      case('mensuales') : //console.log('descarga mensuales');

        listAll(listRef)
        .then(async response => {
          console.log(response);

          for (let item of response.items){
            const url = await getDownloadURL(item);
            console.warn('URL to DOWNLOAD', url);
            
            console.warn('tipo de archivo', item.name);
            let arrayitemSplit : any = item.name.split('.');
            dataType = arrayitemSplit[arrayitemSplit.length - 1];
        

            let script = document.createElement("script");
            script.src = url;
            let body = document.getElementsByTagName("body")[0];
            body.appendChild( script )
            

            // DESCARGAR ARCHIVO
            // ==================
            let binaryData : any = [];
            binaryData.push(url)
            
            filePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
            
            let downloadLink = document.createElement('a');
            downloadLink.href = filePath;
            downloadLink.setAttribute('download', 'descarga.pdf');
            downloadLink.setAttribute('src', binaryData); // fileNameCompleto
            document.body.appendChild(downloadLink);
            downloadLink.click();


            console.log('doc', downloadLink)
            console.log('binario FILE PATH', binaryData);
            console.log('binario', filePath);
            
            // this.download(element.url);

            // this.downloads
            // .download(filePath) // '/downloads/archive.zip'
            // .subscribe(blob => {
            //   const a = document.createElement('a')
            //   const objectUrl = URL.createObjectURL(blob)
            //   a.href = objectUrl
            //   a.download = item.name;
            //   a.click();
            //   URL.revokeObjectURL(objectUrl);
            // })

          //   this.downloads
          // .download(filePath)
          // .subscribe(blob => saveAs(blob, item.name))

            // ==================
            // TERMINA DESCARGA       

          }
          // console.warn('termina for', getDownloadURL(response.items[0]) );

        })
        .catch(error => console.log(error));
        break;
      case('bimestrales'): console.log('descarga bimestrales');
        break;
      case('cuatrimestrales'): console.log('descarga cuatrimestral');
        break;
      case('papeleriasCCM'): console.log('descarga papeleriasCCM');
        break;
      default: console.log('descarga mensuales');
        break;
    }

  }

  // download(url: string): Observable<Blob> {
  //   return this.http.get(url, {
  //     responseType: 'blob'
  //   })
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

  // =================
  // SERVICIOS
  // =================

  getsupplierDocuments(){

    let arrayDocumentos : any;
    let arrayDocumentosFiltrados : any;
    let anio : number = 0;
    let mes : number = 0;
                    
    this._UploadFileService.getdocumentsAll().subscribe(
      res=> {
        console.log('Documentos obtenidos', res);

        arrayDocumentos = res;

        if(this.newForm.controls["anio"].value != ''){
          anio = this.newForm.controls["anio"].value;
          mes = this.newForm.controls["mes"].value;
        }

        arrayDocumentosFiltrados = null;
        arrayDocumentosFiltrados = arrayDocumentos.filter(e => e.idProveedor == this.providerId && e.categoriaDocumento > 200 && e.categoriaDocumento < 300 && e.anno == anio && e.mes == mes);

        this.dataSourceShow = null;
        this.arraySupplierGlobal = [];
        this.showDocument(arrayDocumentosFiltrados, 201, anio, mes, 'Listado trabajadores Excel o PDF');
        this.showDocument(arrayDocumentosFiltrados, 202, anio, mes, 'CFDI mensual de trabajadores');
        this.showDocument(arrayDocumentosFiltrados, 203, anio, mes, 'Comprobante de pago del Banco en PDF');
        this.showDocument(arrayDocumentosFiltrados, 204, anio, mes, 'SIPARE en pdf');
        this.showDocument(arrayDocumentosFiltrados, 205, anio, mes, 'Cedula mensual SUA en PDF (trabajadores)');
        this.showDocument(arrayDocumentosFiltrados, 206, anio, mes, 'Comprobante de pago del Banco en PDF (ISR)');
        this.showDocument(arrayDocumentosFiltrados, 207, anio, mes, 'Declaraci??n de ISR');
        this.showDocument(arrayDocumentosFiltrados, 208, anio, mes, 'Declaraci??n IVA');
        this.showDocument(arrayDocumentosFiltrados, 209, anio, mes, 'Comprobante de pago del Banco en PDF (IVA)');
        this.showDocument(arrayDocumentosFiltrados, 210, anio, mes, 'Opini??n Positiva IMSS (Un mes atr??s)');
        this.showDocument(arrayDocumentosFiltrados, 211, anio, mes, 'Opinion Positiva SAT (Un mes atr??s)');

        this.dataSourceShow = new MatTableDataSource(this.arraySupplierGlobal);

      },
      error => console.log("error consulta regiones",error)
    )

  }

  showDocument(arrayDocumentosFiltrados : any, categoriaDocumento : number, anio: number, mes: number, titulo : string){
    let arraySupplier: any[] = [];
    let arrayDocumentos : any;
    let arrayDocumentoPorProveedor : any;
    let urlShow : any = '';
    let estadoShow : number = 3;
    let idDocumentShow : number = 0;
  
    urlShow = '';
    estadoShow = 4;
    idDocumentShow = 0;
    arrayDocumentoPorProveedor = arrayDocumentosFiltrados.find(e => e.categoriaDocumento == categoriaDocumento)
    if(arrayDocumentoPorProveedor != undefined){ 
      urlShow = (arrayDocumentoPorProveedor.urlDocumento.length > 0) ? arrayDocumentoPorProveedor.urlDocumento : '';
      estadoShow = (arrayDocumentoPorProveedor.estado != undefined) ? arrayDocumentoPorProveedor.estado : 0;
      idDocumentShow = (arrayDocumentoPorProveedor.idDocumento != undefined) ? arrayDocumentoPorProveedor.idDocumento : 0;
    }
    
    this.arraySupplierGlobal.push({supplier_id : this.providerId, documento : titulo, estatus : estadoShow, aprobacion : true, url : urlShow, idDocumento : idDocumentShow})
  }

  aproveRejectDocument(arrayToDb : any){
    // Inserta Archivos en base de datos
    this._UploadFileService.postDocumentosAprobarRechazar(arrayToDb).subscribe(
      res=> {
        console.log('APROBAR DOCUMENTO', res);
        this.getsupplierDocuments();
        this.showMessage(2, 'Guardardo', 'success', 'Se actualizo el registro correctamente', 'Cerrar');
      },
      error => console.log("error al aprobar el ocumento",error)
    )
  }

}


@Injectable({providedIn: 'root'})
export class DownloadService {
  constructor(private http: HttpClient) {}
  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }
}
