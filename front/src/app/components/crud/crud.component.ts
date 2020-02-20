import { FlaskclientService } from 'src/app/services/flaskclient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  users;
  username;
  password;
  returnedUser;
  constructor(
    private flaskclientService: FlaskclientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.flaskclientService.getUsers().subscribe(
      response => this.users = response
    );
  }
  login() {
    this.flaskclientService.getUserByHandle(this.username).subscribe(
      response => this.returnedUser = response
    );
    if (this.returnedUser != null) {
      if (this.username == this.returnedUser.handle && this.password == 'admin') {
        this.router.navigate(["handle/" + this.returnedUser.handle]);
      }
    }

  }



}
