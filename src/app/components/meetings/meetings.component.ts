import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/core/modals/popover/popover.component';
import { Events } from '../../core/interface/event_interface'

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent  implements OnInit {
  
  event: Events = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  }

  minDate=new Date().toISOString();

  eventSource = [];
  
  calendar={
    mode:'month',
    currentDate: new Date(),
  }


  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent(){
    this.event ={
      title:'',
      desc:'',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay:false
    };
  }

  addEvent(){
    const eventCopy: Events = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy.allDay){
      let start = eventCopy.startTime;
      let end= eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(),start.getUTCMonth(),start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(),end.getUTCMonth(),end.getUTCDate()+1));
    }

    // this.eventSource.push(eventCopy);
    //this.myCal.loadEvents();
    this.resetEvent();

  }

  async presentPopover(event: any) {
    const popover = await this.popoverController.create({
      event,
      component:PopoverComponent,
      cssClass:'popover-style',
    });
    return await popover.present(); 
  }

  
}
