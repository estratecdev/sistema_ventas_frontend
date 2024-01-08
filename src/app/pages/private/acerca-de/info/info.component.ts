import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth-service/auth.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  hasDashboardAccess = false;


  constructor(public authService: AuthService){
    
  }
  ngOnInit(): void {
    this.authService.getUserRolesAndPermissions().subscribe(data => {
      this.hasDashboardAccess = data.userPermissions[0].permissions.includes('info');
    });
  }
}
