import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrelloComponent } from './trello.component';

const routes: Routes = [
  { 
    path: '', component: TrelloComponent 
  },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrelloRoutingModule { }
