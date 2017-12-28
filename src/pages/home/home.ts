import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFirestore } from 'angularfire2/firestore';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController) {
    //this.items = db.collection('items').valueChanges();
  }

}
