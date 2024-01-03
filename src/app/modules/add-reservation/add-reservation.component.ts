import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EmpruntService } from 'src/app/services/emprunts.service';
import { LivresService } from 'src/app/services/livres.service';
class Reservation {
  dateDebut:any
  dateFin:any
  user : any
  livre : any
}
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  id = this.route.snapshot.params['id']
  livre :any
  rev  = new Reservation()
  user : any
  constructor(
    private route : ActivatedRoute , 
    private livreService : LivresService , 
    private auth : AuthService ,
    private empruntService : EmpruntService
    ){

  }
  ngOnInit(): void {
    this.livreService.getById(this.id).subscribe(res=>{
      this.livre = res
    })
    this.auth.me().subscribe(res=>{
      console.log(res.principal.username);
      this.auth.userByUserName(res.principal.username).subscribe(res=>{
        console.log(res);
        this.user = res
        
      }) 
    })
  }

  submitForm(){
    this.rev.user = this.user
    this.rev.livre = this.livre
    console.log("hello")
    this.empruntService.addReservation(this.rev).subscribe(res=>{
      console.log(res);
      
    })
    
  }


}
