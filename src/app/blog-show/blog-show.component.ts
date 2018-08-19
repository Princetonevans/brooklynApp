import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog } from '../blog/blog'
import { User } from '../user/user.model'

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css']
})
export class BlogShowComponent implements OnInit {

  blog: Blog;
  user = {name: 'Brooklyn', image: 'http://stevenchustudio.com/wp-content/uploads/2014/11/brewshot-logo.png'};

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.blog = this.route.snapshot.data['blog']
  }

}
