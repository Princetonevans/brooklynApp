import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../mock-blogs';

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css']
})
export class BlogShowComponent implements OnInit {

  blog = Blogs;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

  }

}
