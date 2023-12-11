import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-livre',
  templateUrl: './card-livre.component.html',
  styleUrls: ['./card-livre.component.css']
})
export class CardLivreComponent {

  @Input() childInput: any;
}
