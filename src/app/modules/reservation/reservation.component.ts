import { Component, OnInit } from '@angular/core';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  livres: any

  formatLivre: any;
  genreLivre: any;
  publicCible: any;
  detailsTabla: any;
  filtredFormatLivre: any
  filtredGenreLivre: any
  filtredPublicCible: any
  constructor(
    private livresService: LivresService
  ) { }
  ngOnInit(): void {
    this.getLivres()
    this.getFormatLivre()
    this.getGenreLivre()
    this.getPublicCible()
  }

  getLivres() {
    this.livresService.getLivreEmprunte().subscribe(res => {
      this.livres = res;
      console.log(this.livres)

    })
  }


  filterMethode(filter: any) {
    console.log("publicCibleFilter", filter)
    if (filter.for === 'Public Cible') {
      this.filtredPublicCible = filter.filter
    }
    if (filter.for === 'Genre Livre') {
      this.filtredGenreLivre = filter.filter
    }
    if (filter.for === 'Format Livre') {
      this.filtredFormatLivre = filter.filter
    }
  }

  search() {
    console.log("filtredPublicCible" + this.filtredPublicCible, "filtredGenreLivre" + this.filtredGenreLivre, "filtredFormatLivre" + this.filtredFormatLivre)
  }

  getFormatLivre() {
    this.livresService.getFormatLivre().subscribe(res => {
      this.formatLivre = res
    })
  }

  getGenreLivre() {
    this.livresService.getGenreLivre().subscribe(res => {
      this.genreLivre = res
    })
  }

  getPublicCible() {
    this.livresService.getPublicCible().subscribe(res => {
      this.publicCible = res

    })
  }

}
