import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-logout',
  templateUrl: './button-logout.component.html',
  styleUrls: ['./button-logout.component.css']
})
export class ButtonLogoutComponent  {
  @Input() childInput: any;
}
