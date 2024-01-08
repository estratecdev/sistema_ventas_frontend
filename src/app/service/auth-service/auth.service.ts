import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockConfig } from './mock-auth';
import { PermisosResponse } from '../../models/permissions.model';
import { UserResponse } from '../../models/users/userResponse.model';
import { User } from '../../models/users/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mock: boolean=true;

  constructor(private http: HttpClient) { }
  getUserRolesAndPermissions(): Observable<PermisosResponse> {
    if(this.mock){
      return of(mockConfig)
    }
    return this.http.get<PermisosResponse>('http://localhost:3000//api/user/roles-and-permissions');
  }

  signIn(credentials: User): Observable<UserResponse> {
    console.log("PASO POR AQUI");
    return this.http.post<UserResponse>('http://localhost:3000/login', credentials);
  }
  signUp(credentials: User): Observable<UserResponse> {
    return this.http.post<UserResponse>('http://localhost:3000/register', credentials);
  }
}