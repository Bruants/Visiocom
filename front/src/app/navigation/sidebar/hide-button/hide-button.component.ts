import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-hide-button',
  templateUrl: './hide-button.component.html',
  styleUrls: ['./hide-button.component.scss']
})
export class HideButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideSidebar(): void {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("sidebarCollapse").classList.toggle("active");
  }

}
