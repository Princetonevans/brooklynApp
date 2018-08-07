import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    let user = new User('Brooklyn', 'http://stevenchustudio.com/wp-content/uploads/2014/11/brewshot-logo.png');
    console.log(user)
  }

}
