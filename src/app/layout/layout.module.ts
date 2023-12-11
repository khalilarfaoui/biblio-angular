import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutRoutingModule } from './layout.module-routing';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
    
        
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
    
  ]
})
export class LayoutModule { }
