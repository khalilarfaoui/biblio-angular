import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpruntService } from 'src/app/services/emprunts.service';

@Component({
  selector: 'app-card-livre',
  templateUrl: './card-livre.component.html',
  styleUrls: ['./card-livre.component.css']
})
export class CardLivreComponent implements OnInit {

  @Input() childInput: any;
  @Input() action: any;
  empruntData : any
  constructor(private router: Router ,private empruntservice : EmpruntService ) {

  }
  ngOnInit(): void {
    if(this.action == 'reserve'){

      this.empruntservice.getByLivre(this.childInput.idLivre).subscribe(res=>{
        console.log("Emprunt " , res);
        this.empruntData = res
      })
    }
  }
  emprunt(id: any, route: any) {
    const url = route + "/" + id
    this.router.navigateByUrl(url)
  }
}
