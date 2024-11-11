import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly LOCAL_STORAGE_KEY = 'user_session';

  login(username: string, password: string): boolean {
    // Simulated login process (this could be replaced with an API call)
    if (username === 'hradmin' && password === 'password123') {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify({ role: 'HR Admin' }));
      return true;
    } else if (username === 'employee' && password === 'password123') {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify({ role: 'Employee' }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
  }

  getUserRole(): string | null {
    const userSession = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    return userSession ? JSON.parse(userSession).role : null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.LOCAL_STORAGE_KEY);
  }

  isHRAdmin(): boolean {
    return this.getUserRole() === 'HR Admin';
  }

  isEmployee(): boolean {
    return this.getUserRole() === 'Employee';
  }
}
 