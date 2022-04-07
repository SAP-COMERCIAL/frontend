import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';

@Component({
  selector: 'app-repse-comments',
  templateUrl: './repse-comments.component.html',
  styleUrls: ['./repse-comments.component.css']
})
export class RepseCommentsComponent implements OnInit {

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
proveedorId : any;
comentarios : any;

public newProject: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<supplierModel>
    , private formBuilder: FormBuilder
    , @Inject(MAT_DIALOG_DATA) public data
      ) {
      
        this.projectInfo = data.arrayData;
        this.proveedorId = data.proveedorId;
        this.comentarios = data.comentarios;

    this.newProject = this.formBuilder.group({
      comentarios : new FormControl('', [Validators.required]),
  });
  }

  ngOnInit(): void {

    this.newProject.controls['comentarios'].setValue(this.comentarios);

  }

  cancel(event){
    this.dialogRef.close();
  }

  // =========================
  // UTILERIAS
  // =========================


  // =========================
  // SERVICIOS
  // =========================



}
