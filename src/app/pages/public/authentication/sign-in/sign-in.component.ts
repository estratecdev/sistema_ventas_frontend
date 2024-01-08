import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../service/auth-service/auth.service';
import { UserResponse } from '../../../../models/users/userResponse.model';
import { User } from '../../../../models/users/user.model';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      // Aquí defines los campos del formulario y sus validadores si los tienes
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const credentials: User = this.signupForm.value;
      this.authService.signIn(credentials)
        .subscribe({
          next: (response: UserResponse) => {
            console.log("RESPONSE",response);
            this.router.navigate(['/']);

          },
          error: (error)=>{
            console.log("ocurrio un error");
          }
        });
    }
  }
}
