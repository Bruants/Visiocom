import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/auth/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/shared/user.model';

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

  connection : FormGroup;

  register : FormGroup;

  ngOnInit(): void {
    this.connection = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.register = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  invalidRegister() : boolean {
    return this.register.invalid || 
           this.register.value.password != this.register.value.repeatPassword ||
           this.register.value.password == "";
  }

  attemptLogin() {
    /* Nettoyage de la fenêtre d'alerte */
    this.alertService.clear();

    if (this.connection.valid) {
      this.authService.login(this.connection.value.username, this.connection.value.password)
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
    if (!this.invalidRegister()) {
      let user = new User();
      /* Récupération des champs */
      user.username = this.register.value.username;
      user.name = this.register.value.name;
      user.firstName = this.register.value.firstName;
      user.password = this.register.value.password;
      user.mail = this.register.value.mail;
      user.phone = this.register.value.phone;
      /* Inscription de user */
      this.userService.register(user);
      this.userService.register(this.register.value)
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
