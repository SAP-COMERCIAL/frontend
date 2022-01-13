import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { QuotationRoutes } from './quotation.routing';
import { DemoMaterialModule } from '../../../demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(QuotationRoutes)
  ],
  // declarations: [ProjectCaptureComponent]
})
export class QuotationModule {}