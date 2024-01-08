import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { MarcaComponent } from './marca/marca.component';
import { PerecederosComponent } from './perecederos/perecederos.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProductoComponent } from './producto/producto.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'categoria',
    component: CategoriaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'categoria' }
  },
  {
    path: 'marca',
    component: MarcaComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'marca' }
  },
  {
    path: 'perecederos',
    component: PerecederosComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'perecederos' }
  },
  {
    path: 'presentacion',
    component: PresentacionComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'presentacion' }
  },
  {
    path: 'producto',
    component: ProductoComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'producto' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenRoutingModule { }
