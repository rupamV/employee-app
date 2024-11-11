import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HRAdminGuard implements CanActivate {
  canActivate() {
    return localStorage.getItem('userRole') === 'hr-admin';
  }
}
