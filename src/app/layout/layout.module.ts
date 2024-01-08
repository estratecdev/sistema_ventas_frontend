import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [PrivateLayoutComponent,PublicLayoutComponent, FooterComponent, NavBarComponent, SideBarComponent ],
  imports: [
    CommonModule
  ],
  exports:[PrivateLayoutComponent,PublicLayoutComponent]
})
export class LayoutModule { }
