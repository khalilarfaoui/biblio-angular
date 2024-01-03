import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
  users : any
  constructor(
    private userService : UsersService
  ){

  }
  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.get().subscribe(res=>{
      console.log(res)
      this.users = res
    },err=>{
      alert("Somethong goes wrong")
    })
  }
  delete(){}

}
