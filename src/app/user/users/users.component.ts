import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})

export class UsersComponent implements OnInit {

  users: Array<User> = [];
  lastElementOfPage = 0;
  page = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  private getUsers() {
    this.userService.getUsers(this.page)
      .then((users: any) => {
        this.users = users.users;
        this.lastElementOfPage = users.lastElementOfPage;
      });
  }

  changePage(event: LazyLoadEvent) {
    this.getUsers();
    this.page +=  29;
  }

}
