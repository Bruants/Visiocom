import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrelloRoutingModule } from './trello-routing.module';
import { TrelloComponent } from './trello.component';
import { BoardComponent } from './board/board.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [TrelloComponent, TabsComponent, BoardComponent, ListComponent],
  imports: [
    CommonModule,
    TrelloRoutingModule
  ]
})
export class TrelloModule { }
