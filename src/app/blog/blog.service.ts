import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Blog } from './blog'

@Injectable({
  providedIn: 'root',
})

export class BlogService {

  private blogsUrl = 'api/blogs';  // URL to web api

  constructor(
    private http: HttpClient,
    // private messageService: MessageService,
  ){}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogsUrl);
  }

}
