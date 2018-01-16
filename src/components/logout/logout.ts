import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'logout',
    templateUrl: 'logout.html'
})
export class LogoutComponent {

    constructor(private afAuth: AngularFireAuth) { }

    logout() {
        this.afAuth.auth.signOut();
    }
}
