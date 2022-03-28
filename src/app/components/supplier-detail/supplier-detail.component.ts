import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Console } from 'console';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {

// =========================
// DECLARACIONES
// =========================
nombre : string;
direccion : string;
rfc : string;
contacto : string;
ciudad : string;
estado : string;
supplierDataSource: any;

projectInfo : any;
estadoPantalla : string;

public newProject: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<supplierModel>
    , private _supplyservice : supplyservice
    , private formBuilder: FormBuilder
    , @Inject(MAT_DIALOG_DATA) public data
    , private _snackBar : MatSnackBar
  ) {

    this.projectInfo = data.arrayData;
    this.estadoPantalla = data.estadoPantalla;

    this.newProject = this.formBuilder.group({
      nombre :  new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      rfc: new FormControl('', [Validators.required]),
      contacto: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
    });
   }

// =========================
// PROCEDIMIENTOS
// =========================

  ngOnInit(): void {

    console.warn('this.newProject', this.projectInfo.contacto)
    this.getSupplier();
    if(this.estadoPantalla == 'Edit'){
      this.newProject.controls['nombre'].setValue(this.projectInfo['nombre']);
      this.newProject.controls['direccion'].setValue(this.projectInfo['direccion']);
      this.newProject.controls['ciudad'].setValue(this.projectInfo['ciudad']);
      this.newProject.controls['rfc'].setValue(this.projectInfo['rfc']);
      this.newProject.controls['contacto'].setValue(this.projectInfo.contacto);
      // this.newProject.controls['telefono'].setValue(this.projectInfo['telefono']);
      this.newProject.controls['estado'].setValue(this.projectInfo.estado);
    }
  }

  cancel(event){
    this.dialogRef.close();
  }

  save(form, event){

    if(this.estadoPantalla != 'Edit'){
      if(this.supplierDataSource.filter(e => e.rfc.trim() == form.controls["rfc"].value.trim()).length > 0){
        this.openSnackBar('Este RFC ya esta registrado', '');
        return
      }
    }

    let arrayToDb : any;

    arrayToDb = ({ 
      proveedorid : (this.estadoPantalla == 'Edit') ? this.projectInfo.proveedorid : 0
        , nombre : form.controls["nombre"].value
        , direccion : form.controls["direccion"].value
        , rfc : form.controls["rfc"].value 
        , ciudad : form.controls["ciudad"].value
        , estado : form.controls["estado"].value
        , contacto : form.controls["contacto"].value
        // , vigencia : '2050-01-01'
      });

      if(this.estadoPantalla == 'Edit'){
        this.updateSupplier(arrayToDb);
      }else{
        this.insertSupplier(arrayToDb);
      }
    
  }

  onChangeRFC(event){
    if(this.supplierDataSource.filter(e => e.rfc.trim() == this.newProject.controls["rfc"].value.trim()).length > 0){
      this.openSnackBar('Este RFC ya esta registrado', '');
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

insertSupplier(arrayToDb : any){

  // Inserta Proveedores
  this._supplyservice.insertsupply(arrayToDb).subscribe(
    res=> {
      console.log('PROVEEDORES', res);
      this.openSnackBar('El registro se actualizó con éxito', '');  
      this.dialogRef.close();
    },
    error => console.log("error al insertar proveedores",error)
  )

}

updateSupplier(arrayToDb : any){

  // Inserta Proveedores
  this._supplyservice.updatesupply(arrayToDb).subscribe(
    res=> {
      console.log('PROVEEDORES', res);
    },
    error => console.log("error al actualizar proveedores",error)
  )

}

getSupplier(){

  // Inserta Proveedores
  this._supplyservice.getsupplyAll().subscribe(
    res=> {
      this.supplierDataSource = res;
      console.log('PROVEEDORES', this.supplierDataSource);
    },
    error => console.log("error al actualizar proveedores",error)
  )

}



}
