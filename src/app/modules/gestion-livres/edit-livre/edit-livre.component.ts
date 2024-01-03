import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivresService } from 'src/app/services/livres.service';


class Livre {
  titre:any
  auteur:any
  dateDePublication : any
  isbn : any
  formatLivre : any
  genreLivre : any
  publicCible : any
}
@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent {

  livre = new Livre()
  formatLivre: any;
  genreLivre: any;
  publicCible: any;
  id = this.route.snapshot.params['id']

  constructor(private livreService : LivresService , private router :Router , private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.getLivreById()
    this.getFormatLivre()
    this.getGenreLivre()
    this.getPublicCible()
  }

  onSubmit(){
    this.livreService.edit(this.livre).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('gestion-livres')

      
    },(err)=>{
      alert("Something get wrong")
    })
  }

  getLivreById(){
    this.livreService.getById(this.id).subscribe(res=>{
      this.livre = res
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
