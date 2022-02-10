import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-report-master',
  templateUrl: './report-master.component.html',
  styleUrls: ['./report-master.component.css']
})
export class ReportMasterComponent implements OnInit {

// =================
// DECLARACIONES
// =================

// Para paginación
public pageIndex:number = 0;
public pageSize:number = 20;
public currentPage = 0;
public totalSize:number = 0;
public array: any;
dataSourceShow : MatTableDataSource<reportMasterModel>
dataSourceShowX : any = [];

  constructor(public dialog: MatDialog
          , private _excelService : ExcelServiceService) { }

  ngOnInit(): void {
    this.getReporteMaestro();
  }

  descargarExcel(){
    console.log('Descargar a excel');
    let dataSourceShowToExcel : any[] = [];
    let contador : number = 0
    let sumrateOriginal : number = 0;
    let sumcostActual : number = 0;
    let sumprojectAddedCost : number = 0;
    let sumporjectedActualCost : number = 0;
    let sumporjectedBalance : number = 0;

    this.dataSourceShowX.forEach(element => {

      switch(contador){
        case 0 : 
            dataSourceShowToExcel.push({
              etiqueta : ' '
              , '    ' :''
              , rateOriginal : 'Original Estimate'
              , '' :''
              , costActual : 'Actual Cost'
              , ' ' :''
              , projectAddedCost : 'Project Added'
              , '  ' :''
              , porjectedActualCost : 'PROJECTED ACTUAL COSTS AT COMPLETION'
              , '   ' :''
              , porjectedBalance : 'PROJECTED BALANCE AT COMPLETION'
            });
            contador++;
          break;
        case 1 : 
            dataSourceShowToExcel.push({
              etiqueta : 'Etiqueta' + element.etiqueta
              , '    ' :''
              , rateOriginal : element.rateOriginal
              , '' :''
              , costActual : element.costActual
              , ' ' :''
              , projectAddedCost : element.projectAddedCost
              , '  ' :''
              , porjectedActualCost : element.porjectedActualCost
              , '   ' :''
              , porjectedBalance : element.porjectedBalance
            });
            contador++;
          break;
        default :
            dataSourceShowToExcel.push({
              etiqueta : 'Etiqueta' + element.etiqueta
              , '    ' :''
              , rateOriginal : element.rateOriginal
              , '' :''
              , costActual : element.costActual
              , ' ' :''
              , projectAddedCost : element.projectAddedCost
              , '  ' :''
              , porjectedActualCost : element.porjectedActualCost
              , '   ' :''
              , porjectedBalance : element.porjectedBalance
            });
          break;
      }

      sumrateOriginal = sumrateOriginal + element.rateOriginal;
      sumcostActual = sumcostActual + element.rateOriginal;
      sumprojectAddedCost = sumprojectAddedCost + element.costActual;
      sumporjectedActualCost = sumporjectedActualCost + element.projectAddedCost;
      sumporjectedBalance = sumporjectedBalance + element.porjectedBalance;
    });

    dataSourceShowToExcel.push({
      etiqueta : ''
      , '    ' :''
      , rateOriginal : ''
      , '' :''
      , costActual : ''
      , ' ' :''
      , projectAddedCost : ''
      , '  ' :''
      , porjectedActualCost : ''
      , '   ' :''
      , porjectedBalance : ''
    });

    dataSourceShowToExcel.push({
      etiqueta : 'Contract Totals'
      , '    ' :''
      , rateOriginal : sumrateOriginal
      , '' :''
      , costActual : sumcostActual
      , ' ' :''
      , projectAddedCost : sumprojectAddedCost
      , '  ' :''
      , porjectedActualCost : sumporjectedActualCost
      , '   ' :''
      , porjectedBalance : sumporjectedBalance
    });
    
    dataSourceShowToExcel.push({
      etiqueta : ''
      , '    ' :''
      , rateOriginal : ''
      , '' :''
      , costActual : ''
      , ' ' :''
      , projectAddedCost : ''
      , '  ' :''
      , porjectedActualCost : ''
      , '   ' :''
      , porjectedBalance : ''
    });

    dataSourceShowToExcel.push({
      etiqueta : 'Subcontractors - Base Contract'
      , '    ' :''
      , rateOriginal : '0.00'
      , '' :''
      , costActual : '0.00'
      , ' ' :''
      , projectAddedCost : '0.00'
      , '  ' :''
      , porjectedActualCost : '0.00'
      , '   ' :''
      , porjectedBalance : '0.00'
    });

    dataSourceShowToExcel.push({
      etiqueta : 'Subcontractor Change Order Costs'
      , '    ' :''
      , rateOriginal : '0.00'
      , '' :''
      , costActual : '0.00'
      , ' ' :''
      , projectAddedCost : '0.00'
      , '  ' :''
      , porjectedActualCost : '0.00'
      , '   ' :''
      , porjectedBalance : '0.00'
    });

    dataSourceShowToExcel.push({
      etiqueta : ''
      , '    ' :''
      , rateOriginal : ''
      , '' :''
      , costActual : ''
      , ' ' :''
      , projectAddedCost : ''
      , '  ' :''
      , porjectedActualCost : ''
      , '   ' :''
      , porjectedBalance : ''
    });

    dataSourceShowToExcel.push({
      etiqueta : 'PROJECTED TOTAL COSTS'
      , '    ' :''
      , rateOriginal : ''
      , '' :''
      , costActual : ''
      , ' ' :''
      , projectAddedCost : ''
      , '  ' :''
      , porjectedActualCost : sumporjectedActualCost
      , '   ' :''
      , porjectedBalance : sumporjectedBalance
    });

    this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Reporte Maestro');  
  }

  cancel(event){}

  getReporteMaestro(){
    for (let i = 0; i < 10; i++) {
        this.dataSourceShowX.push({
          etiqueta : i
          , rateOriginal : i
          , costActual : i
          , projectAddedCost : i
          , porjectedActualCost : i
          , porjectedBalance : i
        });
      }
console.log('asasasas', this.dataSourceShowX);

  }

}

