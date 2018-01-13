import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Facebook } from "@ionic-native/facebook";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { HomePage } from '../home/home';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        // private face: Facebook,
        public afAuth: AngularFireAuth
    ) {
        this.afAuth.authState
            .subscribe((user) => {
                const active = navCtrl.getActive();
                if (active && active.name === "LoginPage" && !!user) {
                    this.navCtrl.setRoot(HomePage);
                }
            });
    }

    doFaceLogin() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}
