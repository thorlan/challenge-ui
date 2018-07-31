import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './user/users/users.component';
import { UserRepositoryComponent } from './user/user-repository/user-repository.component';

export const ROUTES: Routes = [
    {path: '', component: UsersComponent},
    {path: 'user/:login', component: UserComponent},
    {path: 'user/repository/:login', component: UserRepositoryComponent},
];

