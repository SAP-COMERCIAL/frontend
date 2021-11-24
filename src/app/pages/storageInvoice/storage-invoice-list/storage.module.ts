import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { StorageRoutes } from './storage-routing';
import { DemoMaterialModule } from '../../../demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(StorageRoutes)
  ],
  // declarations: [ProjectCaptureComponent]
})
export class StorageModule {}