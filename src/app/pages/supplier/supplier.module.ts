import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { SupplierRoutes } from './supplier.routing';
import { DemoMaterialModule } from '../../demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(SupplierRoutes)
  ],
})
export class SupplierModule {}