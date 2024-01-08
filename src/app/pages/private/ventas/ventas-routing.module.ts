import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealizarVentasComponent } from './realizar-ventas/realizar-ventas.component';
import { ConsultarVentasPorMesComponent } from './consultar-ventas-por-mes/consultar-ventas-por-mes.component';
import { ConsultarVentasPorFechaComponent } from './consultar-ventas-por-fecha/consultar-ventas-por-fecha.component';
import { ConsultarVentasDelDiaComponent } from './consultar-ventas-del-dia/consultar-ventas-del-dia.component';
import { ClientesComponent } from './clientes/clientes.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'clientes' }
  },
  {
    path: 'consultar-ventas-del-dia',
    component: ConsultarVentasDelDiaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-ventas-del-dia' }
  },
  {
    path: 'consultar-ventas-por-fecha',
    component: ConsultarVentasPorFechaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-ventas-por-fecha' }
    
  },
  {
    path: 'consultar-ventas-por-mes',
    component: ConsultarVentasPorMesComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'consultar-ventas-por-mes' }
    
  },
  {
    path: 'realizar-ventas',
    component: RealizarVentasComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'realizar-ventas' }
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
