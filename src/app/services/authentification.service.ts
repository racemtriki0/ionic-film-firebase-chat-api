import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
connected=false;
userId:any;
  constructor(
    private afAuth: AngularFireAuth
  ) { this.afAuth.authState.subscribe(auth => {
    if (!auth) {
      console.log('non connecté');
    } else {
      console.log('UserId: ' + auth.uid);
      this.connected = true;
      this.userId = auth.uid;
      
    }
  });}

  public login(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
    this.connected = false;
  }


  

  public getCurrentUser(): Observable<firebase.default.User>{
    return this.afAuth.authState;
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> 
  {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }



}
 /*  constructor() { }
  private id = 'id';
  private connecte = 'non';
private password = 'password';

public creerNouvelUtilisateur(id: string, password: string) {
 if (id !== '' && password !== '') {
 localStorage.setItem(this.id, id);
 localStorage.setItem(this.password, password);
 localStorage.setItem(this.connecte, 'oui');
 return true;
 } else {
 return false;
 }
}
public getIdFromLocalStorage() {
  const s = localStorage.getItem(this.id);
  if (s !== null) {
  return s;
  }
  return '';
 }

public connecter(id: string, password: string) {
  const id2 = localStorage.getItem(this.id);
  const password2 = localStorage.getItem(this.password);
  if (id === id2 && password === password2) {
    localStorage.setItem(this.connecte, 'oui');
  return true;
  } else {
  return false;
  }
 }

 public getConnecte(){
  return localStorage.getItem(this.connecte);
 }


 



 public deconnecter() {
  return localStorage.setItem(this.connecte, 'non');
 }

 
}
 */
