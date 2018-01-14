import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    constructor(
        private navCtrl: NavController,
        private afAuth: AngularFireAuth,
        loginProvider: LoginProvider
    ) {
        this.afAuth.authState
            .subscribe((user) => {
                const active = navCtrl.getActive();
                if (active && active.name === "LoginPage" && !!user) {
                    this.navCtrl.setRoot(HomePage);
                }

                user && loginProvider.setUserInfo(user);
                user && loginProvider.setUserId(user.uid);
            });
    }

    doFaceLogin() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
}
