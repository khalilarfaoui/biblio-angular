import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EmpruntService } from 'src/app/services/emprunts.service';

@Component({
  selector: 'app-mes-emprunt',
  templateUrl: './mes-emprunt.component.html',
  styleUrls: ['./mes-emprunt.component.css']
})
export class MesEmpruntComponent implements OnInit {
  user :any
  livres :any
  constructor(
    private authService : AuthService ,
    private empruntService : EmpruntService

  ){}
  ngOnInit(): void {
    this.authService.me().subscribe(res=>{
      this.user = res
      console.log(this.user)
      this.empruntService.getMyEmprunt(this.user.name).subscribe(res=>{
        this.livres = res 
        console.log(res)
      })
    })
  }

}
