import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDeTallerComponent } from './order-de-taller/order-de-taller.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'orden-de-taller',
    component: OrderDeTallerComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'order-de-taller' }
  },
  {
    path: 'tecnicos',
    component: TecnicosComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'tecnicos' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallerRoutingModule { }
