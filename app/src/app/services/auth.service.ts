import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from  'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(user: User) {
    const userUrl: string = '/api/login';
    return this.http.post(userUrl, user)
      .pipe(
        this.setSession,
        catchError(this.handleError));
  }

  public isLoggedIn() {
    return localStorage.getItem('token');
  }

  private setSession(result) {
    localStorage.setItem('token', result.token);
    return result;
  }

  private handleError(err) {
    return throwError(err.status)
  }
}
