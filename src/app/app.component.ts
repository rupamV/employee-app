import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Attendance Management';
  isAuthenticated = false;

  constructor() {}

  ngOnInit() {
    this.isAuthenticated = localStorage.getItem('authToken') ? true : false;
  }

  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }
}
