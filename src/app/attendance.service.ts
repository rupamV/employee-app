import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private records = [
    { date: '2024-11-01', checkIn: '08:00 AM', checkOut: '05:00 PM', status: 'Present' },
    { date: '2024-11-02', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present' },
    // Add more records as needed
  ];

  getAttendanceRecords() {
    return this.records;
  }

  requestAdjustment(date: string, reason: string, change: string): boolean {
    // Logic to handle adjustment request (this could be an API call)
    console.log(`Adjustment Request for ${date}: ${reason} - Requested Change: ${change}`);
    return true;
  }
}
