import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { WarehouseReviewRoutes } from './warehouse-review.routing';
import { DemoMaterialModule } from '../../demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(WarehouseReviewRoutes)
  ],
  // declarations: [ProjectCaptureComponent]
})
export class WarehouseModule {}