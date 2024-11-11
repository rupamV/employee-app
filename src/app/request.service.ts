import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  // Simulated requests in local storage (for demonstration purposes)
  private requestsKey = 'attendanceRequests';

  constructor() { }

  // Method to create a new request
  createRequest(request: { reason: string, change: string, status: string, employeeId: string }) {
    const requests = this.getRequests();
    requests.push(request);
    localStorage.setItem(this.requestsKey, JSON.stringify(requests));
  }

  // Method to get all requests for the logged-in employee
  getRequests(employeeId: string) {
    const requests = JSON.parse(localStorage.getItem(this.requestsKey) || '[]');
    return requests.filter((request: any) => request.employeeId === employeeId);
  }

  // Method for HR Admin to update the request status
  updateRequestStatus(employeeId: string, status: string) {
    const requests = JSON.parse(localStorage.getItem(this.requestsKey) || '[]');
    const updatedRequests = requests.map((request: any) => {
      if (request.employeeId === employeeId && request.status === 'Pending') {
        request.status = status; // Approved or Denied
      }
      return request;
    });
    localStorage.setItem(this.requestsKey, JSON.stringify(updatedRequests));
  }
}
