import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => import('./auth-independent/auth-independent.module').then(m => m.AuthIndependentModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren : () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule),
  },
  {
    path: '**',
    //component:AuthIndependentComponent ,
    loadChildren : () => import('./auth-independent/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
