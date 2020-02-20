import { FlaskclientService } from 'src/app/services/flaskclient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog;
  blogId;
  update;
  title;
  text;
  user;
  constructor(
    private flaskclientService: FlaskclientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.blogId = this.route.snapshot.params.blogId;
    this.flaskclientService.getBlogById(this.blogId).subscribe(
      response => {
        this.blog = response;
        this.title = this.blog.title;
        this.text = this.blog.text;
        this.flaskclientService.getUserById(this.blog.author).subscribe(
          response => this.user = response
        );
      }
    );

    this.update = JSON.parse(this.route.snapshot.queryParamMap.get('edit'));
  }

  update_blog(id) {
    this.flaskclientService.updateBlog(this.title, this.blogId, this.text, this.blog.author).subscribe(
      Error => {
        console.log(Error);
        alert("Blog updated");
        this.router.navigate(["handle/" + this.user.handle]);
        this.ngOnInit();
      }
    );
  }

}
