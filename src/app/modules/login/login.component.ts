import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any
  password: any
  email: any

  constructor(private authService : AuthService , private router : Router){}

  login() {
    const auth = {
      "username": this.username,
      "password": this.password,
      "email": this.email,
      "device": "pc",
    }
    this.authService.login(auth).subscribe(res=>{
      console.log(res);
      localStorage.setItem("token" , res.token)
      this.router.navigateByUrl('livres')
      
    })
  }
}
