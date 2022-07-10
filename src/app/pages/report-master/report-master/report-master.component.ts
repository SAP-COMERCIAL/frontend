import { Component, EventEmitter, LOCALE_ID, OnInit, Output, ViewChild, NgModule, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { reportMasterModel } from 'src/app/models/reportMaster.model';
import { reportMasterservice } from 'src/app/services/reportMaster.service';
import { CustomerDetailComponent } from 'src/app/components/customer-detail/customer-detail.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { BrowserStack } from 'protractor/built/driverProviders';
import { projectservice } from '../../../services/projects/project.service';
import { formatCurrency } from '@angular/common';
import { Console } from 'console';



@Component({
  selector: 'app-report-master',
  templateUrl: './report-master.component.html',
  styleUrls: ['./report-master.component.css']
})
export class ReportMasterComponent implements OnInit {

// =================
// DECLARACIONES
// =================
curr = formatCurrency(10,this.locale, 'MXP');

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<reportMasterModel>
dataSourceShowX : any = [];
datasourcePorjects : any;
proyecto_id : number

  constructor(public dialog: MatDialog
          , private _excelService : ExcelServiceService
          , private _projectService : projectservice
          , private _reportMasterservice : reportMasterservice
          , @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {

    this.getProyectos();
  }

  search(){
    this.getReporteMaestro();
  }

  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];
    let contador : number = 0
    let sumOriginal_Estimate : number = 0;
    let sumActual_Cost : number = 0;
    let sumProject_Added : number = 0;
    let sumPROJECTED_ACTUAL_COSTS_AT_COMPLETION : number = 0;
    let sumPROJECTED_BALANCE_AT_COMPLETION : number = 0;

    
    this.dataSourceShowX.forEach(element => {

      // switch(contador){
        
      //   case 1 : 
            dataSourceShowToExcel.push({
              '      ' : element.etiqueta
              , '    ' :''
              , Original_Estimate : formatCurrency(element.Original_Estimate, this.locale, '$')
              , '' :''
              , Actual_Cost : formatCurrency(element.Actual_Cost, this.locale, '$')
              , ' ' :''
              , Project_Added : formatCurrency(element.Project_Added, this.locale, '$')
              , '  ' :''
              , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : formatCurrency(element.PROJECTED_ACTUAL_COSTS_AT_COMPLETION, this.locale, '$')
              , '   ' :''
              , PROJECTED_BALANCE_AT_COMPLETION : formatCurrency(element.PROJECTED_BALANCE_AT_COMPLETION, this.locale, '$')
            });
            contador++;

      sumOriginal_Estimate = sumOriginal_Estimate + element.Original_Estimate;
      sumActual_Cost = sumActual_Cost + element.Actual_Cost;
      sumProject_Added = sumProject_Added + element.Project_Added;
      sumPROJECTED_ACTUAL_COSTS_AT_COMPLETION = sumPROJECTED_ACTUAL_COSTS_AT_COMPLETION + element.PROJECTED_ACTUAL_COSTS_AT_COMPLETION;
      sumPROJECTED_BALANCE_AT_COMPLETION = sumPROJECTED_BALANCE_AT_COMPLETION + element.PROJECTED_BALANCE_AT_COMPLETION;
    });

    dataSourceShowToExcel.push({
      '      ' : ''
      , '    ' :''
      , Original_Estimate : ''
      , '' :''
      , Actual_Cost : ''
      , ' ' :''
      , Project_Added : ''
      , '  ' :''
      , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : ''
      , '   ' :''
      , PROJECTED_BALANCE_AT_COMPLETION : ''
    });

    dataSourceShowToExcel.push({
      '      ' : 'Contract Totals'
      , '    ' :''
      , Original_Estimate : formatCurrency(sumOriginal_Estimate, this.locale, '$')
      , '' :''
      , Actual_Cost : formatCurrency(sumActual_Cost, this.locale, '$')
      , ' ' :''
      , Project_Added : formatCurrency(sumProject_Added, this.locale, '$')
      , '  ' :''
      , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : formatCurrency(sumPROJECTED_ACTUAL_COSTS_AT_COMPLETION, this.locale, '$')
      , '   ' :''
      , PROJECTED_BALANCE_AT_COMPLETION : formatCurrency(sumPROJECTED_BALANCE_AT_COMPLETION, this.locale, '$')
    });
    
    dataSourceShowToExcel.push({
      '      ' : ''
      , '    ' :''
      , Original_Estimate : ''
      , '' :''
      , Actual_Cost : ''
      , ' ' :''
      , Project_Added : ''
      , '  ' :''
      , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : ''
      , '   ' :''
      , PROJECTED_BALANCE_AT_COMPLETION : ''
    });

    dataSourceShowToExcel.push({
      '      ' : 'Subcontractors - Base Contract'
      , '    ' :''
      , Original_Estimate : formatCurrency(0.00, this.locale, '$')
      , '' :''
      , Actual_Cost : formatCurrency(0.00, this.locale, '$')
      , ' ' :''
      , Project_Added : formatCurrency(0.00, this.locale, '$')
      , '  ' :''
      , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : formatCurrency(0.00, this.locale, '$')
      , '   ' :''
      , PROJECTED_BALANCE_AT_COMPLETION : formatCurrency(0.00, this.locale, '$')
    });

    dataSourceShowToExcel.push({
      '      ' : 'Subcontractor Change Order Costs'
      , '    ' :''
      , Original_Estimate : formatCurrency(0.00, this.locale, '$')
      , '' :''
      , Actual_Cost : formatCurrency(0.00, this.locale, '$')
      , ' ' :''
      , Project_Added : formatCurrency(0.00, this.locale, '$')
      , '  ' :''
      , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : formatCurrency(0.00, this.locale, '$')
      , '   ' :''
      , PROJECTED_BALANCE_AT_COMPLETION : formatCurrency(0.00, this.locale, '$')
    });

    dataSourceShowToExcel.push({
      '      ' : ''
      , '    ' :''
      , Original_Estimate : ''
      , '' :''
      , Actual_Cost : ''
      , ' ' :''
      , Project_Added : ''
      , '  ' :''
      , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : ''
      , '   ' :''
      , PROJECTED_BALANCE_AT_COMPLETION : ''
    });

    dataSourceShowToExcel.push({
      '      ' : 'PROJECTED TOTAL COSTS'
      , '    ' :''
      , Original_Estimate : ''
      , '' :''
      , Actual_Cost : ''
      , ' ' :''
      , Project_Added : ''
      , '  ' :''
      , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : formatCurrency(sumPROJECTED_ACTUAL_COSTS_AT_COMPLETION, this.locale, '$')
      , '   ' :''
      , PROJECTED_BALANCE_AT_COMPLETION : formatCurrency(sumPROJECTED_BALANCE_AT_COMPLETION, this.locale, '$')
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Reporte Maestro');  
  }

  cancel(event){}

  getReporteMaestro(){

    let arrayRPM : any;
    // Obtiene reporte maestro
    this._reportMasterservice.getReportMasterByProject(this.proyecto_id).subscribe(
      res=> {
        arrayRPM = res;
        console.log('REPORTEEEE', res);
        
        arrayRPM.forEach(element => {
          this.dataSourceShowX.push({
            etiqueta : element.nombre
            , Original_Estimate : element.original_Estimate
            , Actual_Cost : 0
            , Project_Added : element.projected_Added_Costs
            , PROJECTED_ACTUAL_COSTS_AT_COMPLETION : element.projected_Actual_Costs
            , PROJECTED_BALANCE_AT_COMPLETION : element.projected_Balance
          });
        });

        this.descargarExcel();
      },
      error => console.log("error consulta proyectos",error)
    )

  }

  // ==================
  // SERVICIOS
  // ==================
  getProyectos(){
    // Obtiene proyectos
    this._projectService.getProjectAll().subscribe(
      res=> {
        this.datasourcePorjects = res;
        console.log('PROYECTOS', res);
      },
      error => console.log("error consulta proyectos",error)
    )
  }

}

