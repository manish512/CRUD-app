import { FlaskclientService } from 'src/app/services/flaskclient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateblog',
  templateUrl: './updateblog.component.html',
  styleUrls: ['./updateblog.component.css']
})
export class UpdateblogComponent implements OnInit {

  userId;
  title;
  text;

  constructor(
    private flaskclientservice: FlaskclientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.userId
  }

  save() {
    this.flaskclientservice.createNewBlog(this.title, this.userId, this.text);
    this.router.navigate(["handle/" + this.userId])
  }

}
