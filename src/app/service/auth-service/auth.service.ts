import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockConfig } from './mock-auth';
import { PermisosResponse } from '../../models/permissions.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mock: boolean=true;
  http: any;

  constructor() { }
  getUserRolesAndPermissions(): Observable<PermisosResponse> {
    if(this.mock){
      return of(mockConfig)
    }
    return this.http.get('/api/user/roles-and-permissions');
  }
}
