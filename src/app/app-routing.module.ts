import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { ListComponent } from './components/list/list.component';
import { GptComponent } from './components/gpt/gpt.component';

const routes: Routes = [
  {
    path: 'home',
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
    path: 'list',
    component: ListComponent,
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
