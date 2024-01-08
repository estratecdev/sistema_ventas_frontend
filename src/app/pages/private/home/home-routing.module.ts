import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import permissionsGuard from '../../../guards/permissions.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [permissionsGuard], 
    data: { section: 'home' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }