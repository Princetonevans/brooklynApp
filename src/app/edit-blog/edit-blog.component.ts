import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  model = new Model(1, 'Snoop', 'some new content', 'images', 5, 'fiction')
  types = ['fiction', 'non-fiction', 'other'];
  ratings = [1,2,3,4,5];
  submitted = false;
  newOne;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.onBlogRetrieved(data['blog']);
    });
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
    this.submitted = true;
    console.log(this.submitted)
  }

  newBlog() {
    this.newOne = this.model = new Model(1, 'Snoop', 'some new content', 'images', 5, 'fiction');
    console.log(this.newOne)
  }
}
