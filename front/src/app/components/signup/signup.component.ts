import { FlaskclientService } from 'src/app/services/flaskclient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name;
  handle;
  constructor(
    private flaskclientService: FlaskclientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this.flaskclientService.addUser(this.name, this.handle).subscribe(
      response => {
        alert("User Added");
        this.router.navigate([""]);
      }
    )
  }

}
