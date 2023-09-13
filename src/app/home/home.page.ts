import { Component } from '@angular/core';
import { apps } from '../core/data/apps';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public apps = apps;

  constructor() {
    console.log(apps);
  }

  openApp(url: string){
    window.open(url, '_system');
  }
}
