import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(
    private afauth: AngularFireAuth
  ) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afauth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData), 
      err => reject(err));
    });

  }
}
