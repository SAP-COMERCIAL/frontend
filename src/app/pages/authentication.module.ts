import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '../pages/login/login-routing.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CustomerComponent } from './catcustomer/customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';

@NgModule({
  declarations: [
  
    CustomerComponent,
       SupplierComponent
  ],
  imports: [
  CommonModule,
  AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
