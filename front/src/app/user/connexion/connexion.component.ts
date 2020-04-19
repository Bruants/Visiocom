import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, 
              private authService : AuthService,
              private userService : UserService) { }

  connexion : FormGroup;
  inscription : FormGroup;

  ngOnInit(): void {
    this.connexion = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.inscription = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      identifiant: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  invalidInscription() : boolean
  {
    return this.inscription.invalid || 
           this.inscription.value.password != this.inscription.value.repeatPassword ||
           this.inscription.value.password == "";
  }

  attemptLogin() {
    console.log("race");
    if (this.connexion.valid && 
        this.inscription.value.password == this.inscription.value.repeatPassword) 
    {
      this.authService.login(this.connexion.value.identifiant, this.connexion.value.password);
    }
  }

  attemptRegistration() {
    if (!this.invalidInscription()) {
      let user = new User();
      user.id = this.inscription.value.identifiant;
      user.name = this.inscription.value.name;
      user.firstName = this.inscription.value.firstName;
      user.password = this.inscription.value.password;
      user.mail = this.inscription.value.mail;
      user.phone = this.inscription.value.phone;
      this.userService.register(user);
    }
  }
}
