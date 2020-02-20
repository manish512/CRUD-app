import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { UserComponent } from './components/user/user.component';
import { BlogComponent } from './components/blog/blog.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateblogComponent } from './components/updateblog/updateblog.component';


const routes: Routes = [
  { path: '', component: CrudComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'handle/:userId', component: UserComponent },
  { path: 'blog/:blogId', component: BlogComponent },
  { path: 'update_blog/:userId', component: UpdateblogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
