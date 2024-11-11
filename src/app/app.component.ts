// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],  // Import RouterModule for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Attendance Management';
  isAuthenticated = false;

  constructor() {}

  ngOnInit() {
    // Check if the user is authenticated (you can use a service or localStorage for this)
    this.isAuthenticated = localStorage.getItem('authToken') ? true : false;
  }

  logout() {
    // Logout the user and clear the session
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }
}
