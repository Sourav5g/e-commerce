import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSucessfulRoutingModule } from './order-sucessful-routing.module';
import { OrderSucessfulComponent } from './order-sucessful.component';


@NgModule({
  declarations: [
    OrderSucessfulComponent
  ],
  imports: [
    CommonModule,
    OrderSucessfulRoutingModule
  ]
})
export class OrderSucessfulModule { }
