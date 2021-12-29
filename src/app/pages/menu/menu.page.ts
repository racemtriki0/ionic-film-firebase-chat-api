import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router, private autServ: AuthentificationService) { }

  ngOnInit() {
  }
  public pages = [
    {titre: 'Accueil', chemin: '/menu/home', icone: 'home'},
    {titre: 'Calendar', chemin: '/menu/meteo', icone: 'calendar'},
    {titre: 'Film info', chemin: '/menu/results', icone: 'film'},
    {titre: 'Store', chemin: '/menu/store', icone: 'save'},
    {titre: 'Chat', chemin: '/menu/chat', icone: 'chatbubbles'},
    {titre: 'Actors', chemin: '/menu/actors', icone: 'people'},
    {titre: 'Actor & Film', chemin: '/menu/actorapi', icone: 'videocam'},
    {titre: 'Déconnexion', chemin: 'deconnexion', icone: 'log-out'}
   ];

   onMenuItem(p) {
    if (p.chemin === 'deconnexion') {
    this.autServ.logout();
    this.router.navigateByUrl('/authentification');
    } else {
    this.router.navigateByUrl(p.chemin);
    }
   }
   
   

}
