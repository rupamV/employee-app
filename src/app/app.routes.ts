import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AttendanceRecordsComponent } from './attendance-records/attendance-records.component';
import { AdjustmentRequestComponent } from './adjustment-request/adjustment-request.component';
import { HRAdminAttendanceComponent } from './hr-admin-attendance/hr-admin-attendance.component';
import { HRAdminGuard } from './hr-admin.guard';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'attendance-records', 
    component: AttendanceRecordsComponent, 
    canActivate: [AuthGuard] // Apply AuthGuard
  },
  { 
    path: 'adjustment-request', 
    component: AdjustmentRequestComponent, 
    canActivate: [AuthGuard] // Apply AuthGuard
  },
  { 
    path: 'hr-admin', 
    component: HRAdminAttendanceComponent, 
    canActivate: [AuthGuard, HRAdminGuard] // Apply both AuthGuard and HRAdminGuard
  }
];
