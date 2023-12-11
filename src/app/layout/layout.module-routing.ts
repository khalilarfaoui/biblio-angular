import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LivresComponent } from '../modules/livres/livres.component';

const routes: Routes = [
  {
     path: '', component: SidebarComponent,
     children: [
      { path: 'livres', component: LivresComponent },
    ],
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
