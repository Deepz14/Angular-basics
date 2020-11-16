import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[]

  constructor(private userService : UserService, private route : Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => {
      this.users = user;
    })

  }

  rowClick(user){
    this.route.navigate(['/user', user.id])
  }

}
