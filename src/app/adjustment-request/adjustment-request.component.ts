import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adjustment-request',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adjustment-request.component.html',
  styleUrls: ['./adjustment-request.component.css']
})
export class AdjustmentRequestComponent {
  reason: string = '';
  requestedChange: string = '';
  errorMessage: string = '';

  submitRequest() {
    if (this.reason && this.requestedChange) {
      const request = {
        reason: this.reason,
        requestedChange: this.requestedChange,
        status: 'Pending',  // Initial status is 'Pending'
        date: new Date().toLocaleDateString(),
        employeeId: localStorage.getItem('userRole') // Saving the employee role for reference
      };

      // Save the request to localStorage
      let existingRequests = JSON.parse(localStorage.getItem('attendanceRequests') || '[]');
      existingRequests.push(request);
      localStorage.setItem('attendanceRequests', JSON.stringify(existingRequests));

      this.errorMessage = 'Your request has been submitted successfully.';
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }
}
