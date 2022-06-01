import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { SupplierDetailComponent } from 'src/app/components/supplier-detail/supplier-detail.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { SupplierUserComponent } from '../../components/supplier-user/supplier-user.component';
import { UserService } from '../../services/user.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import Swal from 'sweetalert2';
import { SubscribeOnObservable } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

export class SupplierComponent implements OnInit {

// =================
// DECLARACIONES
// =================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<supplierModel>

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estatus', 'edit', 'users', 'aprove', 'deny']; //, 'delusers'

  constructor(public dialog: MatDialog
    , private _excelService : ExcelServiceService
    , private _supplyservice : supplyservice
    , private _UserService : UserService) { }

  // =================
  // PROCEDIMIENTOS
  // =================
  ngOnInit(): void {
    this.getsupplier();
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

  newsupplier(evetn){
    console.log('Alta de proveedores');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'PROVEEDOR',
      arrayData : null,
      proveedorId: 0,
      estadoPantalla: 'New'
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SupplierDetailComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('proveedores');
      window.location.reload();
    });
  }

  edit(element, event){
    console.log('Editar un proveedores', element);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'PROVEEDOR',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '1300px';
    dialogConfig.height = '900px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SupplierDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
    });
  }

  users(element, event){
    console.log('Editar un proveedores', element);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'USUARIOS',
      arrayData : element,
      proveedorId: element.proveedorId,
      estadoPantalla: 'Edit'
     
    }
    dialogConfig.width = '500px';
    dialogConfig.height = '500px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SupplierUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // window.location.reload();
    });
  }

  // delusers(element, event){
  //   let userId : number = 0
  //   console.log('Elimina usuario', element);

  //   this.getUser(element.rfc);

  // }

  filtrar(event : Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSourceShow.filter = filtro.trim().toLowerCase();
    console.log('filtro', filtro);
  }

  aprove(element, event){
    let arrayToDb : any;

    arrayToDb = {
      proveedorid : element.proveedorid
        , estado : 1 
                }
    
    console.log('APRUEBA', arrayToDb)

    this.updateSupplierStatus(arrayToDb);
  }

  deny(element, event){
    let arrayToDb : any;

    arrayToDb = {
      proveedorid : element.proveedorid
        , estado : 0
                }

    this.updateSupplierStatus(arrayToDb);
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

  getsupplier(){

    let arraySort: any;

    // Proyectos registrados
    this._supplyservice.getsupplyAll().subscribe(
      res=> {
        console.log('Proveedores', res);

        // Ordenado de arreglo
        arraySort = res.sort(function (a, b) {
          if (a.supplier_id < b.supplier_id) {
            return 1;
          }
          if (a.supplier_id > b.supplier_id) {
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

    updateSupplierStatus(arrayToDb : any){

      // Inserta Proveedores
      this._supplyservice.putsupplyStatus(arrayToDb).subscribe(
        res=> {
          console.log('ACTIVO', res);

          this.showMessage(2, 'Comentario', 'success', 'Se actualizo el registro con exito', 'Cerrar');
          this.getsupplier();

        },
        error => console.log("error al actualizar proveedores",error)
      )
    
    }

  // getUser(rfc : string){
  //   let arrayUsers : any;
  //   let arrayUserFilter : any;
  //   let userId : number;

  //   this._UserService.getUsersAll().subscribe(
  //     res=> {
  //       console.log('user', res);
  //       arrayUsers = res;
  //       arrayUserFilter = arrayUsers.filter(e => e.nombreUsuario == rfc)
  //       userId = arrayUserFilter[0]["usuarioId"];
  //       // this.deleteUser(userId);
  //     },
  //     error => console.log("error consulta regiones",error)
  //   )

  // }

//   deleteUser(userId : number){

// console.log('usuarios', userId);

//     this._UserService.postDeleteUser(userId).subscribe(
//       res=> {
//         console.log('Proveedores', res);        
        
//       },
//       error => console.log("error consulta regiones",error)
//     )
//   }

}
