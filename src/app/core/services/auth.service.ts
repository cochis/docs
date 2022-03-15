import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { FunctionsService } from './functions.service';
import { GoogleAuthProvider } from "firebase/auth";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.afAuth.authState;
  public auth;

  constructor(private afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public functions: FunctionsService,
    public router: Router,
    public ngZone: NgZone,) {
  }

  // async sendVerificationEmail(): Promise < void> {}
  // async resetPassword(): Promise < void> {}
  // async loginGoogle(): Promise < User > {}
  // async register(): Promise < User > {}
  // async login(): Promise < User > {}
  async login(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.functions.toastError(error);
      throw new Error(error);
    }
  }

  async logout() {
    return await this.afAuth.signOut().then(res => {
      this.functions.toastMessage('Ha cerrado sesión', 'success');

    }).catch((error) => {
      this.functions.toastError(error);
      throw new Error(error);
    });
  }

  async register(email: string, password: string): Promise<any> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('user', user)
      let userSave: User = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        displayName: user.displayName,
        dateCreated: Date.now().toString(),
        dateEdited: Date.now().toString(),
        lastLogIn: Date.now().toString(),
        actived: false
      }
      this.updateUserData(userSave);
      await this.sendVerifcationEmail();
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async requestPassword(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email).catch((error) => {
      this.functions.toastError(error);
      throw new Error(error);
    });
  }

  async resetPassword(passsword: string, oobCode: string) {
    return await this.afAuth
      .confirmPasswordReset(oobCode, passsword)
      .catch((error) => {
        this.functions.toastError(error);
        throw new Error(error);
      });
  }
  SendVerificationMail() {
    console.log(this.afAuth.currentUser);
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())

  }

  async GoogleAuth() {
    const provider = new GoogleAuthProvider();

    try {
      const { user } = await this.afAuth.signInWithPopup(provider);
      let userSave: User = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        displayName: user.displayName,
        dateCreated: Date.now().toString(),
        dateEdited: Date.now().toString(),
        lastLogIn: Date.now().toString(),
        actived: false
      }


      this.updateUserData(userSave);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }




  }
  async sendVerifcationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      dateCreated: Date.now().toString(),
      dateEdited: Date.now().toString(),
      lastLogIn: Date.now().toString(),
      actived: false

    };

    return userRef.set(data, { merge: true });
  }
}