import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginInterface } from '../form/interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private route: Router, private userService: UserService) {}
  onSubmit(formValue: loginInterface): void {
    this.userService.setLocalStorage(formValue.role);
    this.route.navigate(['/dashboard']);
  }
}
