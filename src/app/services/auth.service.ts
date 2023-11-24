import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  isAuthenticatedUser(): boolean {
    const role = localStorage.getItem('role');
    if (role) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  isUserRoleAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'admin';
  }

  removeToken(): void {
    localStorage.removeItem('role');
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}