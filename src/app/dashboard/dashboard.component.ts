import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  role = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    const roles = localStorage.getItem('role');
    if (!roles) {
      this.route.navigate(['']);
    } else {
      if (roles === 'admin') {
        this.role = 'Admin';
      } else if (roles === 'user') {
        this.role = 'User';
      }
    }
  }

  onLogout(): void {
    localStorage.removeItem('role');
    this.route.navigate(['']);
  }
}
