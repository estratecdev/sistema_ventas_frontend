import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarApartadosPorMesComponent } from './consultar-apartados-por-mes/consultar-apartados-por-mes.component';
import { ConsultarApartadosPorFechaComponent } from './consultar-apartados-por-fecha/consultar-apartados-por-fecha.component';
import { ConsultarApartadosDelDiaComponent } from './consultar-apartados-del-dia/consultar-apartados-del-dia.component';
import { ApartarProductosComponent } from './apartar-productos/apartar-productos.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'apartar-productos',
    component: ApartarProductosComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'apartar-productos' }
  },
  {
    path: 'consultar-apartados-del-dia',
    component: ConsultarApartadosDelDiaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-apartados-del-dia' }
  },
  {
    path: 'consultar-apartados-por-fecha',
    component: ConsultarApartadosPorFechaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-apartados-por-fecha' }
  },
  {
    path: 'consultar-apartados-por-mes',
    component: ConsultarApartadosPorMesComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-apartados-por-mes' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartadosRoutingModule { }
