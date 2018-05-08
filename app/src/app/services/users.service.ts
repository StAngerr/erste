import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    const userUrl:string = '/users';
    return this.http.get(userUrl);
  }
}
