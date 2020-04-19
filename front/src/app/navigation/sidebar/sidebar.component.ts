import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  route: Router

  constructor(private router: Router) {
    this.router.events.subscribe(evt => {
      this.route = router;
      this.inWhichPages();
  });
   }

  ngOnInit(): void {

  }

  inWhichPages(): void {    
    console.debug(this.route.url);
    this.isInPage("home");
    this.isInPage("about");
    this.isInPage("user");

  }

  isInPage(page: string): void {
    if(this.route.url.startsWith("/" + page)){
      document.getElementById(page).className = "active";
    } else {
      document.getElementById(page).className = ""
    }
  }
}
