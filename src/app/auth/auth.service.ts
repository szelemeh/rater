import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
    newUser: any;
    private eventAuthError = new BehaviorSubject<string>('');
    public eventAuthError$ = this.eventAuthError.asObservable();

    constructor(
        private ngFireAuth: AngularFireAuth,
        private database: AngularFirestore,
        private router: Router
    ) { }

    getAuthState() {
        return this.ngFireAuth.authState;
    }

    loginUser(email: string, password: string) {
        this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then( userCredential => {
                this.router.navigate(['home']);
                this.eventAuthError.next(null);
            })
            .catch(error => {
                this.eventAuthError.next(error)
            })
 
    }

    logoutUser() {
        return this.ngFireAuth.auth.signOut();
    }

    signupUser(email: string, password: string) {
        this.ngFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                
                this.newUser = {
                    email: email,
                    password: password
                }

                this.insertUserData(userCredential);

                this.eventAuthError.next(null);

                this.router.navigate(['home']);
                
            })
            .catch (error => {
                this.eventAuthError.next(error);
            });

    }

    insertUserData(userCredential: firebase.auth.UserCredential) {
        return this.database.doc(`Users/${userCredential.user.uid}`)
            .set({
                email: this.newUser.email,
                password: this.newUser.password,
                role: 'regular-user'

            })
    }
}
