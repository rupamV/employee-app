import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HRAdminGuard } from './hr-admin.guard';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'attendance-records', 
    loadComponent: () => import('./attendance-records/attendance-records.component').then(m => m.AttendanceRecordsComponent), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'adjustment-request', 
    loadComponent: () => import('./adjustment-request/adjustment-request.component').then(m => m.AdjustmentRequestComponent), 
    canActivate: [AuthGuard]
  },
  { 
    path: 'hr-admin', 
    loadComponent: () => import('./hr-admin-attendance/hr-admin-attendance.component').then(m => m.HRAdminAttendanceComponent), 
    canActivate: [AuthGuard, HRAdminGuard] 
  }
];
