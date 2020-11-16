import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/Users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  base_url = 'https://jsonplaceholder.typicode.com/users'

  getUsers(){
    return this.http.get<User[]>(this.base_url)
  }

  getUserDetails(id : number){
    return this.http.get<User>(`${this.base_url}/${id}`)
  }

}
