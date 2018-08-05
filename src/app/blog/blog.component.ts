import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../models/blog.model'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  pageTitle = 'All Blogs';
  blogs: Blog;
  selectedBlog: Blog;
  errorMessage: string;
  model: Model;
  constructor(private blogService: BlogService,
               private route: ActivatedRoute) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      blogs => this.blogs = blogs,
      error => this.errorMessage = <any>error
    );
  }


  onSelect(blog: Blog): void {
      this.selectedBlog = blog;

  }
}
