import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { GptComponent } from './gpt/gpt.component';
import { ListComponent } from './list/list.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopoverComponent } from '../core/modals/popover/popover.component';



@NgModule({
  declarations: [
    TasksComponent,
    GptComponent,
    ListComponent,
    MeetingsComponent,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    TasksComponent,
    GptComponent,
    ListComponent,
    MeetingsComponent,
    PopoverComponent
  ]
})
export class ComponentsModule { }
