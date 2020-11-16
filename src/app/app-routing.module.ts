import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'users', component : UsersComponent},
  {path : 'user/:id', component : UserdetailsComponent},
  {path : '', redirectTo : '/home', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [HomeComponent, UsersComponent, UserdetailsComponent]

