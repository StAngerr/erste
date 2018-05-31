import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from  '../models/user';


@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  getAllUsers() {
    const userUrl:string = '/users';
    return this.http.get(userUrl);
  }
  /*
  * Observable<HttpResponse<User>>
  * */
  createNewUser(user: User) {
    const userUrl: string = '/api/signup';
    return this.http.post(userUrl, user);
  }

  /*
  *
  * */
  login(user: User) {
    return this.authService.login(user);
  }
}
