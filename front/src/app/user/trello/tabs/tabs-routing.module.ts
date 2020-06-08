import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs.component';
import { BoardComponent } from '../board/board.component';

const routes: Routes = [
  
  { path: '', component: TabsComponent },
  { path: 'board/:id', component: BoardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TabsRoutingModule { }
