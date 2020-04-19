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
  loading = false;
  submitted = false;
  returnUrl: string;

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

  // convenience getter for easy access to form fields
  get f() { return this.connexion.controls; }

  get fIns() { return this.inscription.controls; }

  invalidInscription() : boolean
  {
    return this.inscription.invalid || 
           this.inscription.value.password != this.inscription.value.repeatPassword ||
           this.inscription.value.password == "";
  }

  attemptLogin() {
    if (this.connexion.valid) {
      //this.authService.login(this.connexion.value.identifiant, this.connexion.value.password);
      this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.connexion.invalid) {
            return;
        }

        this.returnUrl = "about";

        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
  }

  attemptRegistration() {
    if (!this.invalidInscription()) {
      let user = new User();
      user.username = this.inscription.value.username;
      user.name = this.inscription.value.name;
      user.firstName = this.inscription.value.firstName;
      user.password = this.inscription.value.password;
      user.mail = this.inscription.value.mail;
      user.phone = this.inscription.value.phone;
      this.userService.register(user);
      //this.authService.login(this.connexion.value.identifiant, this.connexion.value.password);
      this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.inscription.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.inscription.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['user/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
  }
}
