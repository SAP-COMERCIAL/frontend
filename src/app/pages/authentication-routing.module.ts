import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
      }
    //   ,
    //   {
    //     path: 'reset-password',
    //     loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(module => module.AuthResetPasswordModule)
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
