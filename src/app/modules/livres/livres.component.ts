import { Component, OnInit } from '@angular/core';
import { Livres } from 'src/app/models/Livres';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres : any
  currentPage = 1;
  pageSize = 3;
  totalItems = 100;
  constructor(
    private livresService : LivresService
  ){}
  ngOnInit(): void {
    this.getLivres()
  }

  getLivres() {
    this.livresService.get(this.currentPage-1, this.pageSize).subscribe(res=>{
      this.livres = res.content; 
      this.totalItems = res.totalElements;
      console.log("getLivres" ,this.livres )
      console.log("totalItems" ,this.totalItems )
    })
  }

  loadData(page: number) {
    console.log("loadData",page)
    this.currentPage = page;
    this.getLivres();
  }

}
