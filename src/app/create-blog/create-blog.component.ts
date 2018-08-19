import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog/blog';
import { BlogService } from '../blog/blog.service';
import { Model } from '../models/blog.model';
import { Router} from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {


  pageTitle: string = 'Add Blog';
  blog: Blog;
  model: any[] = [];
  genres = ['fiction', 'non-fiction', 'other'];
  ratings = [1,2,3,4,5];
  submitted = false;
  newOne;
  blogId;
  editForm: FormGroup;
  p: Blog;
  m: any;
  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let p = Object.assign({}, this.model);
    let m = JSON.stringify(p)
    // this.blog = this.model;
    this.blogService.createBlog(m)
    .subscribe(model => this.model.push(m));
    // this.submitted = true;
    // console.log(m);
    // console.log(p)
    this.router.navigate(['/blog']);
  }


}
