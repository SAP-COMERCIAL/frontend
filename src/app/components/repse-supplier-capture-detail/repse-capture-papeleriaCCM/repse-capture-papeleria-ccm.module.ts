import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RepseCapturePapeleriaCCMRoutes } from './repse-capture-papeleria-ccm.routing';
import { ChartistModule } from 'ng-chartist';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(RepseCapturePapeleriaCCMRoutes)
  ],
  declarations: [


  ],
})
export class RepseCapturePapeleriaCCMModule {}
