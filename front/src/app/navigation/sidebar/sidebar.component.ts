import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  route: Router

  constructor(private router: Router,
              private authService : AuthService) {
    this.router.events.subscribe(evt => {
      this.route = router;
      this.inWhichPages();
  });
   }

  ngOnInit(): void {}

  inWhichPages(): void {    
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

  userLogged() : boolean {
    const currentUser = this.authService.currentUserValue;
    /* Utilisateur connecté */
    if (currentUser) {
      return true;
    }
    return false;
  }

  logout() {
    this.router.navigate(['user/login']);
    this.authService.logout();
  }
}
