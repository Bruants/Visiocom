import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/user/auth/auth.service';
import { UserService } from 'src/app/user/auth/user.service';
import { User } from 'src/app/user/user.model';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/navigation/alert/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, 
              private authService : AuthService,
              private router : Router,
              private alertService : AlertService,
              private userService : UserService) { }

  connexion : FormGroup;

  inscription : FormGroup;

  ngOnInit(): void {
    this.connexion = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.inscription = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  invalidInscription() : boolean {
    return this.inscription.invalid || 
           this.inscription.value.password != this.inscription.value.repeatPassword ||
           this.inscription.value.password == "";
  }

  attemptLogin() {
    /* Nettoyage de la fenêtre d'alerte */
    this.alertService.clear();

    if (this.connexion.valid) {
      this.authService.login(this.connexion.value.username, this.connexion.value.password)
          .pipe(first())
          .subscribe(
            data => {
              this.router.navigate(['home']);
            },
            error => {
              this.alertService.error(error);
            }
          );
    }
  }

  attemptRegistration() {
    /* Nettoyage de la fenêtre d'alerte */
    this.alertService.clear();
    if (!this.invalidInscription()) {
      let user = new User();
      /* Récupération des champs */
      user.username = this.inscription.value.username;
      user.name = this.inscription.value.name;
      user.firstName = this.inscription.value.firstName;
      user.password = this.inscription.value.password;
      user.mail = this.inscription.value.mail;
      user.phone = this.inscription.value.phone;
      /* Inscription de user */
      this.userService.register(user);
      this.userService.register(this.inscription.value)
          .pipe(first())
          .subscribe(
            data => {
              this.alertService.success('Inscription réussite', true);
              this.router.navigate(['user/login']);
            },
            error => {
              this.alertService.error(error);
            }
          );
    }
  }
}
