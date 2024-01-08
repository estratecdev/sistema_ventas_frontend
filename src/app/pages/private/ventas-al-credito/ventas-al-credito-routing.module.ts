import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarCreditosComponent } from './administrar-creditos/administrar-creditos.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'administrar-creditos',
    component: AdministrarCreditosComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'administrar-creditos' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasAlCreditoRoutingModule { }
