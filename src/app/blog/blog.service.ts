import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { Blog } from './blog'
import { catchError, tap } from 'rxjs/operators';
import { Model } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})

export class BlogService {

  private blogsUrl = 'https://blog-app-api.herokuapp.com/blogs/';  // URL to web api

  initializeBlog() {
    return {
        id: 0,
        title: null,
        body: null,
        img: null,
        starRating: null,
        genre: null,
    }
  }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient,
    // private messageService: MessageService,
  ){}


  // get all blogs

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.blogsUrl).pipe(
           tap(data => console.log('All: ' + JSON.stringify(data))),
           catchError(this.handleError)
    );
  }
   private handleError(err: HttpErrorResponse){
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
      }
      console.error(errorMessage);
      return throwError(errorMessage);
  }

// get one blog

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`https://blog-app-api.herokuapp.com/blogs/${id}`)

  }

  // Edit Blog
  editBlog(model: Model, id: number): Observable<Model> {
    return this.http.put<Blog>(`https://blog-app-api.herokuapp.com/blogs/${id}`, model, this.httpOptions)
  }

  // Create Blog
  createBlog(model): Observable<Model> {
    // model.id = 0;
    return this.http.post<Blog>('https://blog-app-api.herokuapp.com/blogs/', model, this.httpOptions)
  }

  // Edit Blog
  deleteBlog(id: number): Observable<{}> {
    return this.http.delete(`https://blog-app-api.herokuapp.com/blogs/${id}`, this.httpOptions)
  }

}
