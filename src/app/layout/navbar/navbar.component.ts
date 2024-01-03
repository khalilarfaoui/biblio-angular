import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  role : any
  user : any
  constructor(private router : Router , private authService : AuthService){}
  ngOnInit(): void {
    this.authService.me().subscribe(res=>{
      this.user = res
      this.role = this.user.authorities[0].authority
      console.log(res)
    })
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('login')
  }
}
