import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hr-admin-attendance',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hr-admin-attendance.component.html',
  styleUrls: ['./hr-admin-attendance.component.css']
})
export class HRAdminAttendanceComponent {
  attendanceRequests: any[] = [];

  ngOnInit() {
    // Load attendance requests from localStorage
    const requests = JSON.parse(localStorage.getItem('attendanceRequests') || '[]');
    this.attendanceRequests = requests;
  }

  approveRequest(request: any) {
    request.status = 'Approved';
    this.updateRequestStatus(request);
  }

  denyRequest(request: any) {
    request.status = 'Denied';
    this.updateRequestStatus(request);
  }

  updateRequestStatus(request: any) {
    const requests = JSON.parse(localStorage.getItem('attendanceRequests') || '[]');
    const index = requests.findIndex((r: any) => r.date === request.date && r.employeeId === request.employeeId);
    if (index !== -1) {
      requests[index] = request;
      localStorage.setItem('attendanceRequests', JSON.stringify(requests));
    }
  }
}
