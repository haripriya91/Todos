import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  users;
  model = {};
  viewModel = [];
  sub;
  userId=101;
  user;
  constructor(private userService :UserService) { }
  
  ngOnInit() {
    //this.userService.getUsers().subscribe(p=>this.users = p);
    this.sub = this.userService.getUsers().subscribe(model => {
      this.model = model;
      this.viewModel = Object.keys(model);
    });
    this.userService.showUserDetails(this.userId).subscribe(user=>{
      this.user= user;
    })
  }

}
