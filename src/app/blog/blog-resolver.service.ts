import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { BlogService } from './blog.service'
import { Blog } from './blog';


@Injectable()
export class BlogResolver implements Resolve<Blog> {

      constructor(private blogService: BlogService) {

      }

      resolve(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<Blog> {
        let id = +route.params['id'];
          return this.blogService.getBlogById(id);
      }
}
