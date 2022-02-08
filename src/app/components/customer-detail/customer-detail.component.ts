import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { customerModel } from 'src/app/models/customer.model';
import { customerservice } from '../../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

// =========================
// DECLARACIONES
// =========================
nombre : string;
direccion : string;
ciudad : string;
rfc : string;
responsable : string;
telefono : string;
estado : string;

projectInfo : any;
estadoPantalla : string;

public newProject: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<customerModel>
    , private _customerservice : customerservice
    , private formBuilder: FormBuilder
    , @Inject(MAT_DIALOG_DATA) public data

  ) {

    this.projectInfo = data.arrayData;
    this.estadoPantalla = data.estadoPantalla;

    this.newProject = this.formBuilder.group({
      nombre :  new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      rfc: new FormControl('', [Validators.required]),
      responsable: new FormControl(''),
      telefono: new FormControl('', [Validators.required]),
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
        id : 0
        , nombre : form.controls["nombre"].value
        , direccion : form.controls["direccion"].value
        , rfc : form.controls["rfc"].value 
        , ciudad : form.controls["ciudad"].value
        , estado : '' //form.controls["estado"].value
        , contacto : '' //form.controls["responsable"].value
        , vigencia : '2050-01-01'
        , estatus : 1
      });

    this.insertCustommer(arrayToDb);
  }

// =========================
// UTILERIAS
// =========================


// =========================
// SERVICIOS
// =========================

insertCustommer(arrayToDb : any){
  
  console.log('aqui esta log', arrayToDb)
  // Inserta clientes
  this._customerservice.insertcustomer(arrayToDb).subscribe(
    res=> {
      console.log('CLIENTES', res);
    },
    error => console.log("error al insertar clientes",error)
  )

}

updateCustommer(arrayToDb : any){

// Actualiza clientes
this._customerservice.updatecustomer(arrayToDb).subscribe(
  res=> {
    console.log('CLIENTES', res);
  },
  error => console.log("error al actualizar proyectos categorias",error)
)

}


}
