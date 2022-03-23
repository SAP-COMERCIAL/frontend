import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplierModel } from 'src/app/models/supplier.model';
import { supplyservice } from '../../../services/supplier.service';

@Component({
  selector: 'app-repse-capture-papeleria-ccm',
  templateUrl: './repse-capture-papeleria-ccm.component.html',
  styleUrls: ['./repse-capture-papeleria-ccm.component.css']
})
export class RepseCapturePapeleriaCCMComponent implements OnInit {
// =========================
// DECLARACIONES
// =========================

ciudad : string;
estado : string;
objetivoSocial : string;
tipoPersona : string;
telefono : string;
email : string;
actaConstitutiva : string;
ine : string;
altaIMSS : string;
altaINFONAVIT : string;
altaSAT : string;
edoCtaBancario : string;
edoFinanciero : string;
contrato : string;
registroPatronalProv : string;

public newProject: FormGroup;

constructor(
  private _supplyservice : supplyservice
  , private formBuilder: FormBuilder
) { 
  this.newProject = this.formBuilder.group({
    anio: new FormControl('', [Validators.required]),
    mes: new FormControl('', [Validators.required])
  });
}

// =========================
// PROCEDIMIENTOS
// =========================

  ngOnInit(): void {
  }

  save(form, event){

    // let arrayToDb : any;

    // arrayToDb = ({ 
    //   proveedorid : 0
    //     , nombre : form.controls["nombre"].value
    //     , direccion : form.controls["direccion"].value
    //     , rfc : form.controls["rfc"].value 
    //     , ciudad : form.controls["ciudad"].value
    //     , estado : form.controls["estado"].value
    //     , contacto : form.controls["contacto"].value
    //     // , vigencia : '2050-01-01'
    //   });

    // this.insertSupplier(arrayToDb);
    
  }

// =========================
// UTILERIAS
// =========================


// =========================
// SERVICIOS
// =========================
}
