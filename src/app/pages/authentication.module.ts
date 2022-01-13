import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '../pages/login/login-routing.module';
import { WarehouseReviewComponent } from './warehouse-review/warehouse-review.component';

@NgModule({
  declarations: [
  
           WarehouseReviewComponent
  ],
  imports: [
  CommonModule,
  LoginRoutingModule
  ]
})
export class AuthenticationModule { }
