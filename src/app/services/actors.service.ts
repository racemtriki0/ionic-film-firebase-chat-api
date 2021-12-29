import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  acrtorsCollection: AngularFirestoreCollection;
 

  constructor(private afs: AngularFirestore,private httpClient:HttpClient) {
    
    this.acrtorsCollection = this.afs.collection('actors');
  }
 
  getactors() {
    return this.acrtorsCollection.valueChanges({ idField: 'id' });
  }
  getActorInfo(Actorss: string){
    return this.httpClient.get('https://imdb-api.com/en/API/SearchName/k_3rt6wbeh/'+Actorss);
  }
}