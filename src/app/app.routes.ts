import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { SignInComponent } from './pages/public/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './pages/public/authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/public/authentication/forgot-password/forgot-password.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export const routes: Routes = [
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [
            { path: 'acerca-de', loadChildren: () => import('./pages/private/acerca-de/acerca-de.module').then(m => m.AcercaDeModule) },
            { path: 'almacen', loadChildren: () => import('./pages/private/almacen/almacen.module').then(m => m.AlmacenModule) },
            { path: 'apartados', loadChildren: () => import('./pages/private/apartados/apartados.module').then(m => m.ApartadosModule) },
            { path: 'caja', loadChildren: () => import('./pages/private/caja/caja.module').then(m => m.CajaModule) },
            { path: 'compras', loadChildren: () => import('./pages/private/compras/compras.module').then(m => m.ComprasModule) },
            { path: 'compras-al-credito', loadChildren: () => import('./pages/private/compras-al-credito/compras-al-credito.module').then(m => m.ComprasAlCreditoModule) },
            { path: 'comprobantes', loadChildren: () => import('./pages/private/comprobantes/comprobantes.module').then(m => m.ComprobantesModule) },
            { path: 'cotizaciones', loadChildren: () => import('./pages/private/cotizaciones/cotizaciones.module').then(m => m.CotizacionesModule) },
            { path: '', loadChildren: () => import('./pages/private/home/home.module').then(m => m.HomeModule) },
            { path: 'inventario', loadChildren: () => import('./pages/private/inventario/inventario.module').then(m => m.InventarioModule) },
            { path: 'parametros', loadChildren: () => import('./pages/private/parametros/parametros.module').then(m => m.ParametrosModule) },
            { path: 'taller', loadChildren: () => import('./pages/private/taller/taller.module').then(m => m.TallerModule) },
            { path: 'usuarios', loadChildren: () => import('./pages/private/usuarios/usuarios.module').then(m => m.UsuariosModule) },
            { path: 'ventas', loadChildren: () => import('./pages/private/ventas/ventas.module').then(m => m.VentasModule) },
            { path: 'ventas-al-credito', loadChildren: () => import('./pages/private/ventas-al-credito/ventas-al-credito.module').then(m => m.VentasAlCreditoModule) }
        ]
    },
    {
        path: 'auth',
        component: PublicLayoutComponent,
        children: [
          { path: 'sign-in', component: SignInComponent },
          { path: 'sign-up', component: SignUpComponent },
          { path: 'forgot-password', component: ForgotPasswordComponent }
        ]
    },
    {
        path:'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: '**',
        redirectTo: '/page-not-found'
    },
    {
        path:'page-not-found',
        component: PageNotFoundComponent
    }
];
