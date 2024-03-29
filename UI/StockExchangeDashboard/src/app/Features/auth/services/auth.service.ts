import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

    login(request: LoginRequest): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/auth/login`, {
        email: request.email,
        password: request.password
      }).pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle errors here
          if (error.status === 400) {
            // Unauthorized - email or password is incorrect
            alert('Incorrect email or password');
          } else {
            // Handle other errors if needed
            console.error('Login failed:', error);
          }
          // Re-throw the error to propagate it to the component
          return throwError(error);
        })
      );
    }

  setUser(user: User): void {
    this.$user.next(user);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-id', user.id);
    localStorage.setItem('user-roles', user.roles.join(','));
  }

  user() : Observable<User | undefined> {
    return this.$user.asObservable();
  }

  getUser(): User | undefined {
    const email = localStorage.getItem('user-email');
    const roles = localStorage.getItem('user-roles');
    const id = localStorage.getItem('user-id');

    if (email && roles && id) {
      const user: User = {
        email: email,
        roles: roles.split(','),
        id: id
      };

      return user;
    }

    return undefined;
  }

  logout(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);
  }
  
}
