import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { Blog } from './blog'
import { catchError, tap } from 'rxjs/operators';
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
    return this.http.get<Blog[]>(this.blogsUrl).pipe(
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

}
