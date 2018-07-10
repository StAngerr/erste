import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }
  public model: User = new User();
  public resultMsg: string;

  ngOnInit() {
  }

  login() {
    this.userService.login(this.model).subscribe((data: any) => {
      this.resultMsg = data.success;
    });
  }
}
