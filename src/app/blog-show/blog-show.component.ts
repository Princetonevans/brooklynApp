import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog } from '../blog/blog'

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css']
})
export class BlogShowComponent implements OnInit {

  blog: Blog;
  // selectedBlog = Blog;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.blog = this.route.snapshot.data['blog']
  }

}
