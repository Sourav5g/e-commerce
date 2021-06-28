import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[ 
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SliderComponent],
})
export class LayoutModule { }
