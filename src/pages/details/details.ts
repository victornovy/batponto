import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
})
export class DetailsPage {

    public selectedHour;

    constructor(public viewCtrl: ViewController, public navParams: NavParams) { }

    ngOnInit() {
        this.selectedHour = this.navParams.get('selectedHour');
        console.log(this.selectedHour);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
