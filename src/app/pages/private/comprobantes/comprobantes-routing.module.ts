import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoDeComprobanteComponent } from './tipo-de-comprobante/tipo-de-comprobante.component';
import { TirajeDeComprobantesComponent } from './tiraje-de-comprobantes/tiraje-de-comprobantes.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'tipo-de-comprobante',
    component: TipoDeComprobanteComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'tipo-de-comprobante' }
  },
  {
    path: 'tiraje-de-comprobantes',
    component: TirajeDeComprobantesComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'tiraje-de-comprobantes' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprobantesRoutingModule { }
