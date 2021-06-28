import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { ProductsModule } from 'src/app/shared/products/products.module';
import { RegisterModule } from 'src/app/shared/register/register.module';
import { LoginModule } from 'src/app/shared/login/login.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    ProductsModule,
    RegisterModule,
    LoginModule
  ]
})
export class HomeModule { }
