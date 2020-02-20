import { FlaskclientService } from 'src/app/services/flaskclient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  blogs;
  userId;
  constructor(
    private flaskclientService: FlaskclientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.userId;
    this.flaskclientService.getBlogByUser(this.userId).subscribe(
      response => this.blogs = response
    );
  }

  add_new_blog() {
    this.router.navigate(["update_blog/" + this.userId])
  }

  delete_blog(id) {
    this.flaskclientService.deleteBlogById(id).subscribe(
      response => {
        alert("Blog deleted");
        this.ngOnInit();
      }
    )
  }

  update_bulk() {
    this.flaskclientService.update_bulk().subscribe(
      response => {
        alert("Update Started");
      }
    )
  }

  edit_blog(id) {
    this.router.navigate(["blog/" + id], { queryParams: { "edit": true } });
  }

}
