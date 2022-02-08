
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
// import { LoginComponent } from './pages/login/login.component';  

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

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
import { StorageInvoiceListComponent } from './pages/storageInvoice/storage-invoice-list/storage-invoice-list.component';
import { QuotationDetailComponent } from './components/quotations/quotation-detail/quotation-detail.component';
import { QuotationDetailFilesComponent } from './components/quotations/quotation-detail-files/quotation-detail-files.component';
import { AuthComponent } from './components/auth/auth.component';
import { WarehouseReviewComponent } from './pages/warehouse-review/warehouse-review.component';
import { PoDetailComponent } from './components/po-detail/po-detail.component';
import { AuthSigninComponent } from './components/auth-signin/auth-signin.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { CustomerComponent } from './pages/catcustomer/customer/customer.component';
import { SupplierComponent } from './pages/supplier/supplier.component';


// import { Notification } from './components/notification/notification.component/notification.component.component';
// import { NotificationComponent } from './components/notification/notification/notification.component' 

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    CategoriesComponent,
    // LoginComponent,
    CategoriesListComponent,
    ProjectCaptureDetailComponent,
    ProjectCaptureComponent,
    RequisitionListComponent,
    RequisitionDetailComponent,
    QuotationListComponent,
    PoListComponent,
    StorageInvoiceListComponent,
    QuotationDetailComponent,
    QuotationDetailFilesComponent,
    AuthComponent,
    WarehouseReviewComponent,
    PoDetailComponent,
    AuthSigninComponent,
    CustomerDetailComponent,
    SupplierDetailComponent,
    CustomerComponent,
    SupplierComponent
    // ,
    // Notification.ComponentComponent,
    // NotificationComponent
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
    MatCardModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
    // RouterModule.forRoot(AppRoutingModule, {useHash: true}) // AppRoutes
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
