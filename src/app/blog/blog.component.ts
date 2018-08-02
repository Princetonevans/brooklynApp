import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blogs } from '../mock-blogs';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  pageTitle = 'All Blogs';
  blogs = Blogs;
  selectedBlog: Blog;
  errorMessage: string;

  constructor(private blogService: BlogService) { }

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
