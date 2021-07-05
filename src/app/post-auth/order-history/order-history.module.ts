import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderHistoryComponent } from './order-history.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';


@NgModule({
  declarations: [
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    LayoutModule
  ]
})
export class OrderHistoryModule { }
