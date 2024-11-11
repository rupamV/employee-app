import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-records.component.html',
  styleUrls: ['./attendance-records.component.css']
})
export class AttendanceRecordsComponent {
  attendance = [
    { date: '2024-11-01', checkIn: '9:00 AM', checkOut: '5:00 PM', status: 'Present' },
    { date: '2024-11-02', checkIn: '9:30 AM', checkOut: '5:00 PM', status: 'Late' },
    { date: '2024-11-03', checkIn: '9:00 AM', checkOut: '5:00 PM', status: 'Present' }
  ];

  navigateToAdjustmentRequest() {
    window.location.href = '/adjustment-request';  // Redirect to adjustment request form
  }
}
