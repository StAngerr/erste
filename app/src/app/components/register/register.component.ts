import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public message: string;
  constructor(
    private userService: UsersService
  ) {}
  public model: User = new User();
  ngOnInit() {
  }

  onSubmit() {
    this.userService.createNewUser(this.model).subscribe((resp: {
      err: Object,
      msg: string,
      success: boolean
    }) => {
      this.message = resp.msg;
    });
  }
}
