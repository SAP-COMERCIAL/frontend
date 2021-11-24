import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { ProjectCaptureDetailComponent } from './project-capture-detail.component';
import { ProjectCaptureDetailRoutes } from './project-capture-detail.routing';
import { ChartistModule } from 'ng-chartist';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(ProjectCaptureDetailRoutes)
  ],
  // declarations: [ProjectCaptureDetailComponent]
})
export class ProjectCaptureDetailModule {}
