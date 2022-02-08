import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '../pages/login/login-routing.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
  CommonModule,
  AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
