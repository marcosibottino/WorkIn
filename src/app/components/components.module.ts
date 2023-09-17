import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { GptComponent } from './gpt/gpt.component';
// import { NewsComponent } from './news/news.component';
import { NewsComponent } from './news/news.component'
import { MeetingsComponent } from './meetings/meetings.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopoverComponent } from '../core/modals/popover/popover.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TasksComponent,
    GptComponent,
    NewsComponent,
    MeetingsComponent,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    TasksComponent,
    GptComponent,
    NewsComponent,
    MeetingsComponent,
    PopoverComponent
  ]
})
export class ComponentsModule { }
