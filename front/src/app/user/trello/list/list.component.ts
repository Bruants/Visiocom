import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  list : List;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface List {
    id: string,
    name: string,
    closed: boolean,
    pos: number,
    softLimit: any,
    idBoard: string,
    subscribed: boolean
}