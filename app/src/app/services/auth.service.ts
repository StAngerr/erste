import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(user: User) {
    const userUrl: string = '/api/login';
    return this.http.post(userUrl, user)
      .map(this.setSession)
      .catch(this.handleError);
  }

  public isLoggedIn() {
    return localStorage.getItem('token');
  }

  private setSession(result) {
    localStorage.setItem('token', result.token);
    return result;
  }

  private handleError(err) {
    return Observable.throw(err.status)
  }
}
