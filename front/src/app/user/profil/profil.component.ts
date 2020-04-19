import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  profil : FormGroup;

  isShow : boolean = false;

  ngOnInit(): void {
    this.profil = this.formBuilder.group({
      identifiant: ['', Validators.required],
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: [''],
      repeatPassword: [''],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  updateProfil() {
    // TODO
    this.profil = this.formBuilder.group({
      identifiant: [this.profil.value.identifiant, Validators.required],
      name: [this.profil.value.name, Validators.required],
      firstName: [this.profil.value.firstName, Validators.required],
      password: [this.profil.value.password, Validators.required],
      newPassword: [this.profil.value.newPassword],
      repeatPassword: [this.profil.value.repeatPassword],
      mail: [this.profil.value.mail, [Validators.required, Validators.email]],
      phone: [this.profil.value.phone]
    });
  }

  invalidProfil() : boolean {
    /* TODO vérifier mot de passe */
    return this.profil.invalid || this.isShow && (this.profil.value.newPassword != this.profil.value.repeatPassword
                                                   || this.profil.value.newPassword == "")
  }

  modifierProfil() {
    if (!this.invalidProfil()) {
      // TODO
      this.updateProfil();
    }
  }

  getName() : String {
    return this.profil.value.name;
  }

  getFirstName() : String {
    return this.profil.value.firstName;
  }

  getIdentifiant() : String {
    return this.profil.value.identifiant;
  }

  getMail() : String {
    return this.profil.value.mail;
  }

  getPhone() : String {
    return this.profil.value.phone;
  }

  show() {
    this.updateProfil();
    this.isShow = true;
  }

  noShow() {
    this.updateProfil()
    this.isShow = false;
  }

}
