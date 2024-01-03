import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  user :any
  role : any
  constructor(private router : Router , private authService : AuthService){}
  ngOnInit(): void {
    this.authService.me().subscribe(res=>{
      this.user = res
      this.role = this.user.authorities[0].authority
      console.log(res)
    })
  }
  goTo(data : string){
    const url = data
    this.router.navigateByUrl(url)
  }
}
