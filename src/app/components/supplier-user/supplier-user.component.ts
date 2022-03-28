import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

pageInfo : any;
estadoPantalla : string;

public newPage: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<supplierModel>
    , private _supplyservice : supplyservice
    , private formBuilder: FormBuilder
    , @Inject(MAT_DIALOG_DATA) public data
    , private _snackBar : MatSnackBar
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


    if(this.isEdit == true){
      this.updateUser();
    }else{
      this.insertUser();
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
  insertUser(){
    console.log('INSERTA USUARIO');
    this.openSnackBar('Se creo el usuario correctamente', '');
    this.dialogRef.close();
  }

  updateUser(){
    console.log('ACTUALIZA USUARIO');
    this.openSnackBar('Se actualizó el usuario correctamente', '');
    this.dialogRef.close();
  }

}
