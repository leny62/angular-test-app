import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  role = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    const roles = localStorage.getItem('role');
    if (!roles) {
      this.route.navigate(['']);
    }
  }

  onLogout(): void {
    localStorage.removeItem('role');
    this.route.navigate(['']);
  }
}
