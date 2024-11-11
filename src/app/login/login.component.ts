import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  role: string = '';  // Will be 'hr' or 'employee'
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isRoleSelected: boolean = false;  // Track if a role is selected

  constructor(private router: Router) {}

  // Select the role - HR or Employee
  selectRole(role: string) {
    this.role = role;
    this.isRoleSelected = true;  // Show the login form after role selection
  }

  // Perform login based on selected role
  login() {
    if (this.role === 'hr') {
      // HR Admin login with hardcoded credentials
      if (this.username === 'hr@admin.com' && this.password === 'admin123') {
        localStorage.setItem('authToken', 'admin-token');
        localStorage.setItem('userRole', 'hr-admin');
        this.router.navigate(['/hr-admin']);
      } else {
        this.errorMessage = 'Invalid HR Admin credentials';
      }
    } else if (this.role === 'employee') {
      // Employee login with any username
      if (this.username && this.password) {
        localStorage.setItem('authToken', 'employee-token');
        localStorage.setItem('userRole', 'employee');
        this.router.navigate(['/attendance-records']);
      } else {
        this.errorMessage = 'Please enter valid credentials';
      }
    }
  }
}
