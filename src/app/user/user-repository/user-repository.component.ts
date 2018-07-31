import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.css'],
  providers: [UserService]
})
export class UserRepositoryComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute) {

   }
  repositories = [];
  userName = '';

  ngOnInit() {
    this.route.params.subscribe( (param: any) => {
      this.userName = param.login;
    });
    this.getRepositories();
  }

  public getRepositories () {
    this.userService.getUserRepositories(this.userName)
        .then(response => {
          this.repositories = response;
        });
  }

}
