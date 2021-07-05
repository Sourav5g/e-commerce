import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSucessfulComponent } from './order-sucessful.component';

const routes: Routes = [
  {
    path: '',
    component:OrderSucessfulComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSucessfulRoutingModule { }
