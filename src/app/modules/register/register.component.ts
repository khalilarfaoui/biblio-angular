import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: any
  password: any
  email: any

  constructor(private authService : AuthService , private router : Router){}
  ngOnInit(): void {
  }

  register() {
    const auth = {
      "username": this.username,
      "password": this.password,
      "email": this.email,
      "device": "pc",
    }
    this.authService.register(auth).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('login')
      
    },err=>{
      alert("something goes wrong")
    })
  }
}
