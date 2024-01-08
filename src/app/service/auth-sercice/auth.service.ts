import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: any;

  constructor() { }
  getUserRolesAndPermissions(): Observable<any> {
    return this.http.get('/api/user/roles-and-permissions');
  }
}
