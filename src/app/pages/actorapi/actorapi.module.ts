import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorapiPageRoutingModule } from './actorapi-routing.module';

import { ActorapiPage } from './actorapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorapiPageRoutingModule
  ],
  declarations: [ActorapiPage]
})
export class ActorapiPageModule {}
