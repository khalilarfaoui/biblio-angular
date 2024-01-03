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
import { SelectComponent } from '../modules/select/select.component';
import { FormsModule } from '@angular/forms';
import { EmpruntComponent } from '../modules/emprunt/emprunt.component';
import { ReservationComponent } from '../modules/reservation/reservation.component';
import { AddReservationComponent } from '../modules/add-reservation/add-reservation.component';
import { AddUserComponent } from '../modules/gestion-users/add-user/add-user.component';
import { EditUserComponent } from '../modules/gestion-users/edit-user/edit-user.component';
import { EditLivreComponent } from '../modules/gestion-livres/edit-livre/edit-livre.component';
import { AddLivreComponent } from '../modules/gestion-livres/add-livre/add-livre.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { GestionUsersComponent } from '../modules/gestion-users/gestion-users.component';
import { GestionLivresComponent } from '../modules/gestion-livres/gestion-livres.component';
import { MesEmpruntComponent } from '../modules/mes-emprunt/mes-emprunt.component';
import { MesReservationComponent } from '../modules/mes-reservation/mes-reservation.component';
import { VerificationComponent } from '../modules/verification/verification.component';


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
    SelectComponent,
    EmpruntComponent,
    ReservationComponent,
    AddReservationComponent,
    GestionLivresComponent,
    GestionUsersComponent,
    DashboardComponent,
    AddLivreComponent,
    EditLivreComponent,
    EditUserComponent,
    AddUserComponent,
    MesEmpruntComponent,
    MesReservationComponent,
    VerificationComponent,
    DashboardComponent
        
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    
  ]
})
export class LayoutModule { }
