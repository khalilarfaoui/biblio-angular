import { Component, OnInit } from '@angular/core';
import { EmpruntService } from 'src/app/services/emprunts.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  emprunt :any = 0
  constructor(private empruntService : EmpruntService){}
  ngOnInit(): void {
  }
  code: any
  verify() { 
    this.empruntService.getByCode(this.code).subscribe(res=>{
      this.emprunt = res
      console.log(res);
      
    })
  }
}
