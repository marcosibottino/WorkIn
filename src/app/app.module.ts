import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomePage } from './home/home.page';
// import { TasksComponent } from './components/tasks/tasks.component';
// import { MeetingsComponent } from './components/meetings/meetings.component';
// import { NewsComponent } from './components/news/news.component';
// import { GptComponent } from './components/gpt/gpt.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(),
     AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
