import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { EventPageModule } from './pages/event/event.module';

import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
export const firebaseConfig = {
    apiKey: "AIzaSyD-ojWRySIJlik684_MjTwWIYNkOK9Uok4",
  authDomain: "racem2022.firebaseapp.com",
  databaseURL: "https://racem2022-default-rtdb.firebaseio.com",
  projectId: "racem2022",
  storageBucket: "racem2022.appspot.com",
  messagingSenderId: "283051981897",
  appId: "1:283051981897:web:02d1273003299a34b21398",
  measurementId: "G-DE54TZHHE2"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule ,
    AngularFirestoreModule, 
    HttpClientModule,
    EventPageModule,
    FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFireAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
