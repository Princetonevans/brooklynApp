import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../mock-blogs';
import { BlogService } from '../blog/blog.service';
import { Blog } from '../blog/blog'

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css']
})
export class BlogShowComponent implements OnInit {

  blog;
  // selectedBlog = Blog;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService) {

   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlogById(id).subscribe(
      (data: Blog) => this.blog = data,
      (err: any) => console.log(err)
    );
  }

}
