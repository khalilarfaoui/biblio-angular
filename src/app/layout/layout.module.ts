import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutRoutingModule } from './layout.module-routing';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { ButtonLogoutComponent } from './util/button-logout/button-logout.component';
import { LivresComponent } from '../modules/livres/livres.component';
import { CardLivreComponent } from '../modules/livres/card-livre/card-livre.component';
import { BreadcrumbComponent } from '../modules/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../modules/pagination/pagination.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    SidebarMenuComponent,
    ButtonLogoutComponent,
    LivresComponent,
    CardLivreComponent,
    BreadcrumbComponent,
    PaginationComponent,

    
        
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
    
  ]
})
export class LayoutModule { }
