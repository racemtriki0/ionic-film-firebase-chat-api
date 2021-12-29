import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-gua\
rd';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["authentification"]);

const routes: Routes = [
 {
 path: '',
 redirectTo: 'menu/home',
 pathMatch: 'full'
 },
 {
 path: 'menu',
 loadChildren: () => import('./pages/menu/menu.module').then( m =>
m.MenuPageModule),
canActivate: [AngularFireAuthGuard],
data: { authGuardPipe: redirectUnauthorizedToLogin }
 },
{
path: 'authentification',
loadChildren: () => import('./pages/authentification/authentification.module').then(
m => m.AuthentificationPageModule)
},
{
path: 'inscription',
loadChildren: () => import('./pages/inscription/inscription.module').then( m =>
m.InscriptionPageModule)
},
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  
 
  
  
];
@NgModule({
 imports: [
 RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
 ],
 exports: [RouterModule]
})
export class AppRoutingModule { }
