import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { BlogService } from '../blog/blog.service';
import { Blog } from '../blog/blog'
import { Model } from '../models/blog.model';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  pageTitle: string = 'Blog Edit';
  blog: Blog;
  model: any[] = [];
  genres = ['fiction', 'non-fiction', 'other'];
  ratings = [1,2,3,4,5];
  submitted = false;
  newOne;
  blogId;
  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.onBlogRetrieved(data['blog']);
    });
    this.blogId = this.route.snapshot.paramMap.get('id');
  }

  onBlogRetrieved(blog: Blog): void {
    this.blog = blog;
    if (this.blog.id === 0) {
        this.pageTitle = 'Add Product';
    } else {
      this.pageTitle = `Edit Product: ${this.blog.title}`;
    }
  }

  onSubmit() {
    this.blogService.editBlog(this.blog, this.blogId)
    .subscribe(model => this.model.push(this.model));
    this.submitted = true;
    this.router.navigate(['/blog/', this.blogId]);
  }

  onDelete() {
    this.blogService.deleteBlog(this.blogId)
    .subscribe(model => this.model.push(this.model));
    this.submitted = true;
    this.router.navigate(['/blog/']);
  }

}
