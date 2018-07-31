import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})

export class UserComponent implements OnInit {

  users: Array<User> = [];
  userName = '';

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe( (param: any) => {
      this.userName = param.login;
    });

    this.userService.getUser(this.userName)
      .then(( user: User) => {
        this.users.push(user);
      });
  }

}
