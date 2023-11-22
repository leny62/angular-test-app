import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      role: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.form.get('role')?.markAsTouched();
    if (this.form.valid) {
      const role = this.form.value.role;
      if (role === 'user' || role === 'admin') {
        localStorage.setItem('role', role)
        this.route.navigate(['/dashboard']);
      }
    }
  }
}