import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlaskclientService {



  constructor(
    private http: HttpClient
  ) { }

  addUser(name, handle) {
    return this.http.get('/api/add?name=' + name + '&handle=' + handle + '&joined=1/1/1960')
  }

  getUsers() {
    return this.http.get('/api/getall');
  }

  getBlogByUser(userId) {
    return this.http.get('/api/blog/' + userId)
  }

  getUserByHandle(handle) {
    return this.http.get('/api/getUser?handle=' + handle)
  }

  getUserById(id) {
    return this.http.get('/api/get/' + id)
  }

  getBlogById(blogId) {
    return this.http.get('/api/getBlog?id=' + blogId)
  }

  createNewBlog(title, userId, text) {
    return this.http.post('/api/add_blog',
      {
        "title": title,
        "author": userId,
        "text": text
      }).subscribe(
        response =>
          console.log(response)

      );
  }

  deleteBlogById(id) {
    return this.http.get('/api/deleteBlog?id=' + id)
  }

  updateBlog(title, blogId, text, author) {
    return this.http.post('/api/update_blog',
      {
        "id": blogId,
        "title": title,
        "author": author,
        "text": text
      });
  }

  update_bulk() {
    return this.http.get('/api/autoedit_blogs')
  }

}
