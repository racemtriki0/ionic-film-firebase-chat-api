import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
const routes: Routes = [
 {
 path: '',
 component: MenuPage,
 children: [
 {
 path: 'home',
 loadChildren: () => import('../../home/home.module').then( m =>
m.HomePageModule)
 },
 {
 path: 'meteo',
 loadChildren: () => import('../meteo/meteo.module').then( m =>
m.MeteoPageModule)
 },
 {
  path: 'chat',
  loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
},
{
  path: 'store',
  loadChildren: () => import('../store/store.module').then( m => m.StorePageModule)
},
 
{
  path: 'actors',
  loadChildren: () => import('../actors/actors.module').then( m => m.ActorsPageModule)
},
{
    path: 'results',
    loadChildren: () => import('../results/results.module').then( m => m.ResultsPageModule)
  },

  {
    path: 'actorapi',
    loadChildren: () => import('../actorapi/actorapi.module').then( m => m.ActorapiPageModule)
  },
 ]
 }
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class MenuPageRoutingModule {}
