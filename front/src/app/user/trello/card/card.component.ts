import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card : Card;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Card {
  id: string,
  checkItemStates: any,
  closed: boolean,
  dateLastActivity: string,
  desc: string
  descData: {
     emoji: {}
  },
  dueReminder: any,
  idBoard: string,
  idList: string,
  idMembersVoted: any[],
  idShort: number,
  idAttachmentCover: any,
  idLabels: string[],
  manualCoverAttachment: boolean,
  name: string,
  pos: number,
  shortLink: string,
  isTemplate: false,
  badges: {
     attachmentsByType: {
        trello: {
           board: number,
           card: number
        }
     },
     location: boolean,
     votes: number,
     viewingMemberVoted: boolean,
     subscribed: boolean,
     fogbugz: string,
     checkItems: number,
     checkItemsChecked: number,
     checkItemsEarliestDue: any,
     comments: number,
     attachments: number,
     description: boolean,
     due: any,
     dueComplete: boolean
  },
  dueComplete: boolean,
  due: any,
  idChecklists: string[],
  idMembers: [],
  labels: 
     {
        id: string,
        idBoard: string,
        name: string,
        color: string
     }[],
  shortUrl: string,
  subscribed: boolean,
  url: string,
  cover: {
     idAttachment: any,
     color: any,
     idUploadedBackground: any,
     size: string,
     brightness: string
  }
}