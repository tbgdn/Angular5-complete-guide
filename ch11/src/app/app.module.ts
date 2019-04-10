import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import {FormsModule} from '@angular/forms';
import {ServersService} from './servers/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }