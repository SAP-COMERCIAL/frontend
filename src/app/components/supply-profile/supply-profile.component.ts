import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SupplierUserComponent } from '../../components/supplier-user/supplier-user.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { decode } from 'querystring';
import jwt_decode from "jwt-decode";
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from 'src/app/services/supplier.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-supply-profile',
  templateUrl: './supply-profile.component.html',
  styleUrls: ['./supply-profile.component.css']
})
export class SupplyProfileComponent implements OnInit {

  // ======================
  // DECLARACIONES
  // ======================
  dataSourceUser : any;
  dataSourceShow : any;
  array : any;
  usuarioId : any;
  nombreProveedor : any;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @Output() filterChange = new EventEmitter();

  constructor(
      public dialog: MatDialog
    , private _supplyservice : supplyservice
    ) { }

  ngOnInit(): void {
    this.decode();
  }

  changeAccess(event){
    this.users()
  }

  users(){
    
    const dialogConfig = new MatDialogConfig();

    let arraySupplier : any;
    let arraySendToComponent : any;

    arraySupplier = this.dataSourceShow.filteredData.filter(e => e.rfc == this.usuarioId);

    arraySupplier.forEach(element => {
      arraySendToComponent = {
        proveedorid: element.proveedorid,
        nombre: element.nombre,
        direccion: element.direccion,
        rfc: element.rfc,
        objetoSocial: element.objetoSocial,
        telefonoContacto: element.telefonoContacto,
        correo: element.correo,
        tipoPersona: element.tipoPersona,
        prestadorServicio: 0,
        ciudad: element.ciudad,
        estado: element.estado,
        contacto: element.contacto,
        vigencia: element.vigencia,
        estatus: 1
      }
    });

    console.log('arreglo de proveedor', arraySendToComponent);

    dialogConfig.data = {
      id: 1,
      title: 'USUARIOS',
      arrayData : arraySendToComponent,
      proveedorId: arraySendToComponent["proveedorid"],
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

  // ==================
  // UTILERIAS
  // ==================
  decode(){
    let token = localStorage.getItem('token_access');
    let decodeUser = jwt_decode(token)["usuario"];
    // let decodeProveedorId = jwt_decode(token)["proveedor_id"];
    this.usuarioId = decodeUser;
    console.log('usuarioId', this.usuarioId)
    this.getsupplier();
  
  }

  // ==================
  // SERVICIOS
  // ==================
  getsupplier(){

    let arraySort: any;
    let arrayProveedores : any;

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
        this.dataSourceShow.sort = this.sort;
        arrayProveedores = this.dataSourceShow.filteredData.filter(e => e.rfc == this.usuarioId)
        this.nombreProveedor == arrayProveedores[0]["nombre"]
        
      },
      error => console.log("error consulta regiones",error)
    )
  }


}
