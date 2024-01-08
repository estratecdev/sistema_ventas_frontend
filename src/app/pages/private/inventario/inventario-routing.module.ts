import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrirNuevoInventarioComponent } from './abrir-nuevo-inventario/abrir-nuevo-inventario.component';
import { KardexComponent } from './kardex/kardex.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'abrir-nuevo-inventario',
    component: AbrirNuevoInventarioComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'abrir-nuevo-inventario' }
  },
  {
    path: 'kardex',
    component: KardexComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'kardex' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
