import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router) {}

  getUser(): string | null {
    return localStorage.getItem('role');
  }

  setLocalStorage(userRole: string): void {
    localStorage.setItem('role', userRole);
  }

  goToMovies(): void {
    this.router.navigate(['/movies']);
  }

  goToOneMovie(id: number): void {
    this.router.navigate(['/movies', id]);
  }
}
