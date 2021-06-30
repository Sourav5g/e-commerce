import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren : () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
  // },
  {
    path: 'checkout',
    loadChildren : () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
