import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RolesYPrivilegiosComponent } from './roles-y-privilegios/roles-y-privilegios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'empleados' }
  },
  {
    path: 'roles-y-privilegios',
    component: RolesYPrivilegiosComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'roles-y-privilegios' }
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'usuario' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
