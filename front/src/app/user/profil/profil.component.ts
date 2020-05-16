import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/shared/user.model';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  currentUser : User

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private alertService : AlertService,
              private userService : UserService) { 
                this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
                this.authService.currentUser.subscribe(x => this.currentUser = x);
              }

  profil : FormGroup;

  isShow : boolean = false;

  ngOnInit(): void {
    this.refreshProfil();
  }

  refreshProfil() {
    /* Mise à jour du formulaire (Nouvelles valeurs) */
    this.userService.get(this.currentUser.username).subscribe(datas => {
      this.currentUser = datas;
    });

    this.profil = this.formBuilder.group({
      username: [this.currentUser.username, Validators.required],
      name: [this.currentUser.name, Validators.required],
      firstName: [this.currentUser.firstName, Validators.required],
      password: ['', Validators.required],
      newPassword: [''],
      repeatPassword: [''],
      mail: [this.currentUser.mail, [Validators.required, Validators.email]],
      phone: [this.currentUser.phone]
    });
  }

  updateProfil() {
    console.log(this.currentUser);
    /* Actualisation du formulaire (Maintient des valeurs) */
    this.profil = this.formBuilder.group({
      username: [this.currentUser.username, Validators.required],
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
    return this.profil.invalid || this.isShow && (this.profil.value.newPassword != this.profil.value.repeatPassword
                                                   || this.profil.value.newPassword == "");
  }

  modifyProfil() {
    if (!this.invalidProfil()) {
      this.currentUser.name = this.profil.value.name;
      this.currentUser.firstName = this.profil.value.firstName;
      if (this.isShow) {
        this.currentUser.password = this.profil.value.password;
      }
      this.currentUser.mail = this.profil.value.mail;
      this.currentUser.phone = this.profil.value.phone;
      this.userService.modify(this.currentUser).subscribe(data => {
        this.alertService.success(data.message, true);
      },
      error => {
        this.alertService.error(error);
      });
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
