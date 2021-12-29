import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    
    this.productsCollection = this.afs.collection('products');
  }
 
  getProducts() {
    return this.productsCollection.valueChanges({ idField: 'id' });
  }
}
