import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AuthComponent } from  '../../src/app/components/auth/auth.component';
import { AuthGuard } from './guards/auth.guards';
import { LoginComponent } from './pages/login/login.component';

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
          path: 'login',
          component: LoginComponent,
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
exports: [RouterModule]
})

export class AppRoutingModule { }


