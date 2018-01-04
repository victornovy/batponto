import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from "../details/details";

@IonicPage()
@Component({
    selector: 'page-hours',
    templateUrl: 'hours.html',
})
export class HoursPage implements OnInit {

    public hoursList: Array<any>;
    private selectedPonto;

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ngOnInit() {
        this.selectedPonto = this.navParams.get('selectedPonto');
        this.hoursList = Object.keys(this.selectedPonto);
    }

    openDetail(selectedHour) {
        this.navCtrl.push(DetailsPage, { selectedHour: this.selectedPonto[selectedHour] })
    }
}
