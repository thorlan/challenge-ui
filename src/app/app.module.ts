import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { UsersComponent } from './user/users/users.component';
import { UserRepositoryComponent } from './user/user-repository/user-repository.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserRepositoryComponent,
    UserRepositoryComponent,
    HeaderComponent
  ],
  imports: [

    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),

    UserModule,

    PanelModule,
    BrowserAnimationsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
