import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../interfaces/user.interface';
import { FunctionsService } from './functions.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.afAuth.authState;
  constructor(private afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public functions: FunctionsService) {
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

  async register(email: string, password: string) {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (user) {
        console.log('user', user)
        this.SendVerificationMail()
        this.SetUserData(user);
        return user;
      }
    } catch (error) {
      this.functions.toastError(error);
      throw new Error(error);
    }
    // return await this.afAuth
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch((error) => {

    //   });
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
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );


    const userData: User = {
      ...user
    };
    return userRef.set(userData, {
      merge: true,
    });
  }


}
