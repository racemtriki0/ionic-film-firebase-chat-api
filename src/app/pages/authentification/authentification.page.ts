import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  spinner: boolean = false;
  email: string;
  password: string;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async login() {
    this.spinner = true;
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('/menu/home');
      this.spinner = true;
    } catch (error) {
      console.log(error);
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Échec de la connexion',
      subHeader: "Impossible d'accéder au compte.",
      message: "Impossible d'accéder au compte..",
      buttons: ['Accepter']
    });

    await alert.present();
  }

  togglePassword() {
    if(this.passwordShown) {
      this.passwordShown=false;
      this.passwordType = 'password';
    } else {
      this.passwordShown=true;
      this.passwordType = 'text';

    }
  }

}

