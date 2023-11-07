import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginInterface } from './interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: loginInterface = {
    role: '',
  };
  constructor(private route: Router) {}
  onSubmit(): void {
    localStorage.setItem('role', this.form.role);
    this.route.navigate(['/dashboard']);
  }
}
