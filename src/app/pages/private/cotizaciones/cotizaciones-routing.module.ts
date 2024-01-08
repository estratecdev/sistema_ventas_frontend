import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarCotizacionComponent } from './generar-cotizacion/generar-cotizacion.component';
import { VerCotizacionesComponent } from './ver-cotizaciones/ver-cotizaciones.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'generar-cotizacion',
    component: GenerarCotizacionComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'generar-cotizacion' }
  },
  {
    path: 'ver-cotizacion',
    component: VerCotizacionesComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'ver-cotizacion' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionesRoutingModule { }
