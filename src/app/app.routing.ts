import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'project',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
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
    ]
  },
  {
      path: 'login',
      component: LoginComponent,
  }
];
