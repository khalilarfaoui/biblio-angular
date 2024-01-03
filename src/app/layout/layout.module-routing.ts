import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LivresComponent } from '../modules/livres/livres.component';
import { EmpruntComponent } from '../modules/emprunt/emprunt.component';
import { ReservationComponent } from '../modules/reservation/reservation.component';
import { AddReservationComponent } from '../modules/add-reservation/add-reservation.component';
import { GestionLivresComponent } from '../modules/gestion-livres/gestion-livres.component';
import { EditLivreComponent } from '../modules/gestion-livres/edit-livre/edit-livre.component';
import { GestionUsersComponent } from '../modules/gestion-users/gestion-users.component';
import { EditUserComponent } from '../modules/gestion-users/edit-user/edit-user.component';
import { AddLivreComponent } from '../modules/gestion-livres/add-livre/add-livre.component';
import { AddUserComponent } from '../modules/gestion-users/add-user/add-user.component';
import { MesEmpruntComponent } from '../modules/mes-emprunt/mes-emprunt.component';
import { VerificationComponent } from '../modules/verification/verification.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';

const routes: Routes = [
  {
     path: '', component: SidebarComponent,
     children: [
      { path: 'livres', component: LivresComponent },
      { path: 'reservations', component: ReservationComponent },
      { path: 'emprunt/:id', component: EmpruntComponent },
      { path: 'reserve/:id', component: AddReservationComponent },
      { path: 'gestion-livres', component: GestionLivresComponent },
      { path: 'gestion-livres/:id', component: EditLivreComponent },
      { path: 'gestion-users', component: GestionUsersComponent },
      { path: 'gestion-users/:id', component: EditUserComponent },
      { path: 'add-livre', component: AddLivreComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'mes-emprunts', component: MesEmpruntComponent },
      { path: 'verify', component: VerificationComponent },
      { path: 'dashboard', component: DashboardComponent },
      
    ],
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
