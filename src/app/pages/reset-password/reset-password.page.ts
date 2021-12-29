import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email: string;

  constructor(
    private authService: AuthentificationService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.resetPassword(this.email)
      .then(
        () => {
          this.alertResetPassword();
          this.router.navigateByUrl('/authentification');
        }
      ).catch(
        () => this.alertError()
      )
  }

  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Récupération de mot de passe',
      message: 'Un e-mail vous a été envoyé à <strong>' + this.email + '</strong> avec un lien qui vous permettra de récupérer le mot de passe.',
      buttons: ['Accepter']
    });

    await alert.present();
  }

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Récupération de mot de passe',
      message: 'Impossible denvoyer un e-mail à <strong>' + this.email + '</strong> pour réinitialiser le mot de passe. Essaye à nouveau.',
      buttons: ['Accepter']
    });

    await alert.present();
  }

}

