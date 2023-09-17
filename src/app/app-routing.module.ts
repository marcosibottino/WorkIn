import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { NewsComponent } from './components/news/news.component';
import { GptComponent } from './components/gpt/gpt.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'meetings',
    component: MeetingsComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'chatgpt',
    component: GptComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
