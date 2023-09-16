import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/core/modals/popover/popover.component';


@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent  implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  async presentPopover(event: any) {
    const popover = await this.popoverController.create({
      event,
      component:PopoverComponent,
      cssClass:'popover-style',
    });
    return await popover.present(); 
  }
}
