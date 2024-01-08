import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosDeLaEmpresaComponent } from './datos-de-la-empresa/datos-de-la-empresa.component';
import { MonedasComponent } from './monedas/monedas.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'datos-de-la-empresa',
    component: DatosDeLaEmpresaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'datos-de-la-empresa' }
  },
  {
    path: 'monedas',
    component: MonedasComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'monedas' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
