import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public activeItem: number = 1;

  constructor() {}

  setActiveItem(itemNumber: number) {
    this.activeItem = itemNumber;
  }
}
