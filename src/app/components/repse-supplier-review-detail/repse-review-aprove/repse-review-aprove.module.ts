import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RepseReviewAproveRoutes } from './repse-review-aprove.routing';
import { ChartistModule } from 'ng-chartist';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(RepseReviewAproveRoutes)
  ],
  declarations: [


  ],
})
export class RepseReviewAproveModule {}
