import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from  '../../src/app/components/auth/auth.component';
import { AuthGuard } from './guards/auth.guards';
// import { ProfileGuard } from './guards/profile.guard';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    outlet:'primary',
    children: [
      {
        path: '',
        // redirectTo: 'login',
        redirectTo: '/auth/signin',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      }
      // {
      //   path: 'login',
      //   loadChildren: () => import('src/app/pages/authentication.module').then(module => module.AuthenticationModule)
      // }
      ,
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
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
        path: 'warehouse-review',
        loadChildren: () => import('./pages/warehouse-review/warehouse-review.module').then(m => m.WarehouseModule)
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
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
      }
    ],
    canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
exports: [RouterModule],
providers: []
})

export class AppRoutingModule { }

// export const AppRoutes: Routes = [
//   {
//     path: '',
//     component: AuthComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'auth/signin',
//         pathMatch: 'full'
//       },
//       {
//         path: '',
//         loadChildren:
//           () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
//       },
//       {
//         path: 'dashboard',
//         loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
//       },
//       {
//         path: 'project',
//         loadChildren: () => import('./pages/projects/project-capture/project.module').then(m => m.ProjectModule)
//       },
//       {
//         path: 'categories',
//         loadChildren: () => import('./pages/categories/categories-list/categories.module').then(m => m.CategoriesModule)
//       },
//       {
//         path: 'requisition',
//         loadChildren: () => import('./pages/requisition/requisition-list/requisition.module').then(m => m.RequisitionModule)
//       },
//       {
//         path: 'quotation',
//         loadChildren: () => import('./pages/quotation/quotation-list/quotation.module').then(m => m.QuotationModule)
//       },
//       {
//         path: 'po',
//         loadChildren: () => import('./pages/purchaseOrder/po-list/po.module').then(m => m.PoModule)
//       },
//       {
//         path: 'storage',
//         loadChildren: () => import('./pages/storageInvoice/storage-invoice-list/storage.module').then(m => m.StorageModule)
//       }
//     ]
//   },
//   {
//       path: 'login',
//       component: LoginComponent,
//   }
// ];
