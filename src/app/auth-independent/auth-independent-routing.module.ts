import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'cart',
    loadChildren : () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'product-details',
    loadChildren : () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  {
    path: '**',
    loadChildren : () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthIndependentRoutingModule { }
