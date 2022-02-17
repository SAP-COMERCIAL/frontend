import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../services/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    if(this.estadoPantalla == 'Edit'){
      this.newProject.controls['nombre'].setValue(this.projectInfo['nombre']);
      this.newProject.controls['direccion'].setValue(this.projectInfo['direccion']);
      this.newProject.controls['ciudad'].setValue(this.projectInfo['ciudad']);
      this.newProject.controls['rfc'].setValue(this.projectInfo['rfc']);
      // this.newProject.controls['responsable'].setValue(this.projectInfo['responsable']);
      // this.newProject.controls['telefono'].setValue(this.projectInfo['telefono']);
      // this.newProject.controls['estado'].setValue(this.projectInfo['estado']);
    }
  }

  cancel(event){
    this.dialogRef.close();
  }

  save(form, event){

    let arrayToDb : any;

    arrayToDb = ({ 
      proveedorid : 0
        , nombre : form.controls["nombre"].value
        , direccion : form.controls["direccion"].value
        , rfc : form.controls["rfc"].value 
        , ciudad : form.controls["ciudad"].value
        , estado : 1 //form.controls["estado"].value
        , contacto : form.controls["contacto"].value
        // , vigencia : '2050-01-01'
      });

    this.insertSupplier(arrayToDb);
    
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


}
