import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { supplyusersservice } from '../../services/supplier.users.service';
import { supplierUsersModel } from '../../models/supplier-users.model';

@Component({
  selector: 'app-supplier-user',
  templateUrl: './supplier-user.component.html',
  styleUrls: ['./supplier-user.component.css']
})
export class SupplierUserComponent implements OnInit {

// =========================
// DECLARACIONES
// =========================
nombre : string = '';
usuario : string;
clave : string;
isEdit : boolean = false;
proveedorId : number = 0;

pageInfo : any;
estadoPantalla : string;

public newPage: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<supplierModel>
    , private _supplyservice : supplyservice
    , private formBuilder: FormBuilder
    , @Inject(MAT_DIALOG_DATA) public data
    , private _snackBar : MatSnackBar
    , private _supplyusersservice : supplyusersservice
  ) { 

    this.pageInfo = data.arrayData;
    this.estadoPantalla = data.estadoPantalla;

    this.newPage = this.formBuilder.group({
      clave: new FormControl('', [Validators.required]),
    });
  }

  // =========================
  // PROCEDIMIENTOS
  // =========================

  ngOnInit(): void {
    console.log('informacion', this.pageInfo);
    this.nombre = this.pageInfo.nombre
    this.usuario = this.pageInfo.rfc
  }

  cancel(event){
    this.dialogRef.close();
  }

  save(form, event){
    let arrayToDb : any;

    arrayToDb = ({
      usuarioId : 0
      , nombreUsuario : 'nombre'
      , contrasegnna : 121212
      , correo : ''
      , perfilId : 3
      , perfilNombre : ''
      , estado : 1
      , proveedorId : this.proveedorId
    })

    if(this.isEdit == true){
      this.updateUser(arrayToDb);
    }else{
      this.insertUser(arrayToDb);
    }
  }

  // =========================
  // UTILERIAS
  // =========================
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
  }

  // =========================
  // SERVICIOS
  // =========================
  insertUser(arrayToDb){
    console.log('INSERTA USUARIO');

    // Inserta usuarios
    this._supplyusersservice.insertsupplyUser(arrayToDb).subscribe(
      res=> {
        console.log('PROVEEDORES', res);
        this.openSnackBar('El registro se actualizó con éxito', '');  
        this.dialogRef.close();
      },
      error => console.log("error al insertar proveedores",error)
    )

    this.openSnackBar('Se creo el usuario correctamente', '');
    this.dialogRef.close();
  }

  updateUser(arrayToDb){
    console.log('ACTUALIZA USUARIO');
    // Inserta usuarios
    this._supplyusersservice.updatesupplyUser(arrayToDb).subscribe(
      res=> {
        console.log('PROVEEDORES', res);
        this.openSnackBar('El registro se actualizó con éxito', '');  
        this.dialogRef.close();
      },
      error => console.log("error al insertar proveedores",error)
    )

    this.openSnackBar('Se actualizó el usuario correctamente', '');
    this.dialogRef.close();
  }

}
