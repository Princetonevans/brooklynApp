import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogShowComponent } from './blog-show/blog-show.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './services/data.service';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './services/inMemoryData.service';

import { BlogService } from './blog/blog.service';
import { StarComponent } from './shared/star/star.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogResolver } from './blog/blog-resolver.service';
import { UserComponent } from './user/user.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
// import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent},
  { path: 'create', component: CreateBlogComponent},
  { path: 'blog/edit/:id', component: EditBlogComponent, resolve: { blog: BlogResolver} },
  { path: 'blog/:id', component: BlogShowComponent, resolve: { blog: BlogResolver} },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlogComponent,
    AboutComponent,
    BlogShowComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    StarComponent,
    EditBlogComponent,
    UserComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// ),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    DataService,
    BlogService,
    BlogResolver,
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
