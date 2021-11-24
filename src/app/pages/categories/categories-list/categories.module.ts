import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { CategoriesRoutes } from './categories.routing';
import { DemoMaterialModule } from '../../../demo-material-module';
import { CategoriesListComponent } from './categories-list.component';

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      FlexLayoutModule,
      ChartistModule,
      RouterModule.forChild(CategoriesRoutes)
    ],
    // declarations: [CategoriesListComponent]
  })
  export class CategoriesModule {}
  