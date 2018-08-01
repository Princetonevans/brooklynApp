import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { Blogs } from '../mock-blogs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogs = Blogs;
  constructor() { }

  ngOnInit() {
  }

}
