import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomePage } from './home/home.page';
import { TasksComponent } from './components/tasks/tasks.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { ListComponent } from './components/list/list.component';
import { GptComponent } from './components/gpt/gpt.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomePage,
    TasksComponent,
    MeetingsComponent,
    ListComponent,
    GptComponent
  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
