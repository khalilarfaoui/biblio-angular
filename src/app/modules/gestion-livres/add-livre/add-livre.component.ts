import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivresService } from 'src/app/services/livres.service';


class Livre {
  titre:any
  auteur:any
  dateDePublication : any
  ISBN : any
  formatLivre : any
  genreLivre : any
  publicCible : any
}
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit{
  livre = new Livre()
  formatLivre: any;
  genreLivre: any;
  publicCible: any;
  constructor(private livreService : LivresService , private router :Router) {}
  ngOnInit(): void {
    this.getFormatLivre()
    this.getGenreLivre()
    this.getPublicCible()
  }

  onSubmit(){
    this.livreService.add(this.livre).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('gestion-livres')

      
    },(err)=>{
      alert("Something get wrong")
    })
  }

  getFormatLivre() {
    this.livreService.getFormatLivre().subscribe(res => {
      this.formatLivre = res
    })
  }
  
  getGenreLivre() {
    this.livreService.getGenreLivre().subscribe(res => {
      this.genreLivre = res
    })
  }

  getPublicCible() {
    this.livreService.getPublicCible().subscribe(res => {
      this.publicCible = res

    })
  }
}
