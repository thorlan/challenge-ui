
import { User } from '../user/user.model';
import { Http} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    URL = 'https://challenge-api-thorlan.herokuapp.com/api/users';


    headers = new Headers({
        'Content-Type': 'application/json',
        'withCredentials': 'true'
      });

    constructor (private http: Http) {
        
    }

    public getUser(userName: string): Promise<User> {

     return  this.http.get(`${this.URL}/${userName}/details`)
             .toPromise()
             .then( (response: any) => {
               return response.json();
           });
    }

    public getUsers(page: number): Promise<any> {

        return  this.http.get('http://localhost:8080/api/users?since=' + page)
              .toPromise()
              .then( (response: any) => {
                  const responseJson = response.json();
                  const users = responseJson.pageList;

                  const result = {
                      users: users,
                      total: responseJson.totalElements,
                      lastElementOfPage: responseJson.lastElementOnPage
                  };
                  return result;
              });
       }

       public getUserRepositories(userName: string): Promise<any> {

        return  this.http.get(`${this.URL}/${userName}/repos`)
              .toPromise()
              .then( (response: any) => {
                  return response.json();
              });
       }
}

