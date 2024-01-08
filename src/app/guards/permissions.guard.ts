import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth-service/auth.service'; // Asegúrate de importar tu AuthService
import { Router } from '@angular/router'; // Asegúrate de importar el Router
import { inject } from '@angular/core';
import { map } from 'rxjs';

const permissionsGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) // Crea una instancia del AuthService o inyéctalo si es posible
  const router = inject(Router); // Crea una instancia del Router o inyéctalo si es posible

  const section = route.data['section']; // Obtiene el nombre de la sección de la ruta
  console.log("section",section);
  return authService.getUserRolesAndPermissions().pipe(
    map(data => {
      const hasAccess = data.userPermissions[0].permissions.includes(section);
      if (!hasAccess) {
        router.navigate(['/unauthorized']); // Redirige a una página de acceso denegado
      }
      return hasAccess;
    })
  );
};

export default permissionsGuard;
