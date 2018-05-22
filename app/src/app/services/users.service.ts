import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
//import { Observable } from  'rxjs/Observable';

import { User } from  '../models/user';
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

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
}
