import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarCajaComponent } from './administrar-caja/administrar-caja.component';
import { HistorialCajaComponent } from './historial-caja/historial-caja.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'administrar-caja',
    component: AdministrarCajaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'administrar-caja' }
  },
  {
    path: 'historial-caja',
    component: HistorialCajaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'historial-caja' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaRoutingModule { }
