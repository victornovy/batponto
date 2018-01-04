import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the DetailsPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
})
export class DetailsPage {

    public selectedHour;

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ngOnInit() {
        this.selectedHour = this.navParams.get('selectedHour');
        console.log(this.selectedHour);
    }
}
