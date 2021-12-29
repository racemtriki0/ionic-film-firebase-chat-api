import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorapiPage } from './actorapi.page';

const routes: Routes = [
  {
    path: '',
    component: ActorapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorapiPageRoutingModule {}
