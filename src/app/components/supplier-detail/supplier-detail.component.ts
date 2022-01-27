import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../services/supplier.service';

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

public newProject: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<supplierModel>
    , private _supplyservice : supplyservice
    , private formBuilder: FormBuilder

  ) {

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
        , estado : form.controls["estado"].value
        , contacto : form.controls["contacto"].value
        // , vigencia : '2050-01-01'
      });

    this.insertSupplier(arrayToDb);
    
  }

// =========================
// UTILERIAS
// =========================


// =========================
// SERVICIOS
// =========================

insertSupplier(arrayToDb : any){

  // Inserta Proveedores
  this._supplyservice.insertsupply(arrayToDb).subscribe(
    res=> {
      console.log('PROVEEDORES', res);
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
