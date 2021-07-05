import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'checkout',
    loadChildren : () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
  },
  {
    path: 'successful',
    loadChildren : () => import('./order-sucessful/order-sucessful.module').then(m => m.OrderSucessfulModule),
  },
  {
    path: 'order-history',
    loadChildren : () => import('./order-history/order-history.module').then(m => m.OrderHistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
