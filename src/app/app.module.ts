
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { LoginComponent } from './pages/login/login.component';  

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { ProjectCaptureDetailComponent } from '../app/components/project-capture-detail/project-capture-detail/project-capture-detail.component';
import { ProjectCaptureComponent } from '../app/pages/projects/project-capture/project-capture.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RequisitionListComponent } from './pages/requisition/requisition-list/requisition-list.component';
import { RequisitionDetailComponent } from './components/requisitions/requisition-detail/requisition-detail.component';
import { QuotationListComponent } from './pages/quotation/quotation-list/quotation-list.component';
import { PoListComponent } from './pages/purchaseOrder/po-list/po-list.component';
import { StorageInvoiceListComponent } from './pages/storageInvoice/storage-invoice-list/storage-invoice-list.component' 

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    CategoriesComponent,
    LoginComponent,
    CategoriesListComponent,
    ProjectCaptureDetailComponent,
    ProjectCaptureComponent,
    RequisitionListComponent,
    RequisitionDetailComponent,
    QuotationListComponent,
    PoListComponent,
    StorageInvoiceListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[ MatTableModule ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
