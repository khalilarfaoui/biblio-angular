import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-gestion-livres',
  templateUrl: './gestion-livres.component.html',
  styleUrls: ['./gestion-livres.component.css']
})
export class GestionLivresComponent implements OnInit {
  livres: any
  
  formatLivre: any;
  genreLivre: any;
  publicCible: any;
  detailsTabla :any;
  filtredFormatLivre : any 
  filtredGenreLivre : any 
  filtredPublicCible : any 
  constructor(
    private livresService : LivresService,
    private router : Router
  ){

  }


  getallLivre(){
    this.livresService.get().subscribe(res=>{
      console.log(res);
      this.livres = res
    })
  }
  ngOnInit(): void {
    this.getallLivre()
    this.getFormatLivre()
    this.getGenreLivre()
    this.getPublicCible()
  }

 


  filterMethode(filter: any) {
    console.log("publicCibleFilter", filter)
    if(filter.for === 'Public Cible'){
      this.filtredPublicCible = filter.filter
    }
    if(filter.for === 'Genre Livre'){
      this.filtredGenreLivre = filter.filter
    }
    if(filter.for === 'Format Livre'){
      this.filtredFormatLivre = filter.filter
    }
  }

  search(){
    console.log("filtredPublicCible"+this.filtredPublicCible , "filtredGenreLivre"+this.filtredGenreLivre ,  "filtredFormatLivre"+this.filtredFormatLivre)
    this.livresService.filteredLivre(this.filtredFormatLivre , this.filtredPublicCible ,this.filtredGenreLivre).subscribe(res=>{
      this.livres = res
    })
  }

  getFormatLivre() {
    this.livresService.getFormatLivre().subscribe(res => {
      this.formatLivre = res
    }, (err=>{
      alert("Something goes wrong")
    }))
  }
  
  getGenreLivre() {
    this.livresService.getGenreLivre().subscribe(res => {
      this.genreLivre = res
    }, (err=>{
      alert("Something goes wrong")
    }))
  }

  getPublicCible() {
    this.livresService.getPublicCible().subscribe(res => {
      this.publicCible = res

    }, (err=>{
      alert("Something goes wrong")
    }))
  }

  edit(id : any){
    const url = "gestion-livres/"+id
    this.router.navigateByUrl(url)
  }
  delete(id : any){
    this.livresService.delete(id).subscribe(res=>{
      this.getallLivre()
    } , (err=>{
      alert("Something goes wrong")
    }))
  }

  add(){
    this.router.navigateByUrl('add-livre')
  }

 

}
