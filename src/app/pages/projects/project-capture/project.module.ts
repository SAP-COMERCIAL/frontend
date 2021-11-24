import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { ProjectRoutes } from './project.routing';
// import { ProjectCaptureComponent } from './project-capture.component';
import { DemoMaterialModule } from '../../../demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(ProjectRoutes)
  ],
  // declarations: [ProjectCaptureComponent]
})
export class ProjectModule {}
