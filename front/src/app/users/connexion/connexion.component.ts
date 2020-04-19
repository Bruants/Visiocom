import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  connexion : FormGroup;

  inscription : FormGroup;

  ngOnInit(): void {
    this.connexion = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.inscription = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  invalidInscription() : boolean {
    return this.inscription.invalid || this.inscription.value.password != this.inscription.value.repeatPassword ||
                                       this.inscription.value.password == "";
  }

  toLogIn() {
    if (this.connexion.valid && this.inscription.value.password == this.inscription.value.repeatPassword) {
      alert("TODO Connexion");
      /* TODO */
    }
  }

  toRegister() {
    if (!this.invalidInscription()) {
      alert("TODO Inscription");
      /* TODO */
    }
  }

}
