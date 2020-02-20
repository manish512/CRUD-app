import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { UserComponent } from './components/user/user.component';
import { BlogComponent } from './components/blog/blog.component';
import { UpdateblogComponent } from './components/updateblog/updateblog.component';
import { SignupComponent } from './components/signup/signup.component';
//import {FlaskclientService } from './services/flaskclient.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    UserComponent,
    BlogComponent,
    UpdateblogComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
