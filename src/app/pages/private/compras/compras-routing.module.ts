import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComprasPorFechaComponent } from './consultar-compras-por-fecha/consultar-compras-por-fecha.component';
import { ConsultarComprasPorMesComponent } from './consultar-compras-por-mes/consultar-compras-por-mes.component';
import { HistorialDePreciosComponent } from './historial-de-precios/historial-de-precios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RealizarComprasComponent } from './realizar-compras/realizar-compras.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'consultar-compras-por-fecha',
    component: ConsultarComprasPorFechaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-compras-por-fecha' }
  },
  {
    path: 'consultar-compras-por-mes',
    component: ConsultarComprasPorMesComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-compras-por-mes' }
  },
  {
    path: 'historial-de-precios',
    component: HistorialDePreciosComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'historial-de-precios' }
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'proveedores' }
  },
  {
    path: 'realizar-compras',
    component: RealizarComprasComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'realizar-compras' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
