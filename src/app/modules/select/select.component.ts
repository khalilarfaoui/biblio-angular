import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  filter : any
  ngOnInit(): void {
    console.log(this.listType)
  }
  selected(){
    console.log("selected" , this.filter)
    this.selectChange.emit( {filter : this.filter , for : this.taxtPlaceholder});
  }
  @Input() listType  :any
  @Input() taxtPlaceholder :any
  @Output() selectChange = new EventEmitter<any>();
}
