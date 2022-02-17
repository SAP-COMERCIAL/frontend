import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AuthComponent } from  '../../src/app/components/auth/auth.component';
import { AuthGuard } from './guards/auth.guards';
import { LoginComponent } from './pages/login/login.component';
import { RepseSupplierReviewComponent } from './pages/repse-supplier-review/repse-supplier-review/repse-supplier-review.component';

import { AppComponent }   from './app.component';
import { BrowserModule  } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'auth',
          loadChildren: () => import('./pages/authentication.module').then(module => module.AuthenticationModule)
          // loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./pages/projects/project-capture/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./pages/categories/categories-list/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'requisition',
        loadChildren: () => import('./pages/requisition/requisition-list/requisition.module').then(m => m.RequisitionModule)
      },
      {
        path: 'quotation',
        loadChildren: () => import('./pages/quotation/quotation-list/quotation.module').then(m => m.QuotationModule)
      },
      {
        path: 'po',
        loadChildren: () => import('./pages/purchaseOrder/po-list/po.module').then(m => m.PoModule)
      },
      {
        path: 'storage',
        loadChildren: () => import('./pages/storageInvoice/storage-invoice-list/storage.module').then(m => m.StorageModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./pages/catcustomer/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'supplier',
        loadChildren: () => import('./pages/supplier/supplier.module').then(m => m.SupplierModule)
      },
      {
        path: 'reportMaster',
        loadChildren: () => import('./pages/report-master/report-master/report-master.module').then(m => m.ReportMasterModule)
      },
      {
        path: 'repseCapture',
        loadChildren: () => import('./pages/repse-supplier-capture/repse-supplier-capture/repse-supplier-capture.module').then(m => m.RepseSupplierCaptureModule)
      },
      {
        path: 'repseReviewx',
        loadChildren: () => import('./pages/repse-supplier-review/repse-supplier-review/repse-supplier-review.module').then(m => m.RepseSupplierReviewModule)
      },
      {
          path: 'login',
          component: LoginComponent,
      }
    ],
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
exports: [RouterModule]
})

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule],
//   providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
//   bootstrap: [AppComponent],
// })

// export class AppModule {}
export class AppRoutingModule { }


