import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailsPage } from "../details/details";

@IonicPage()
@Component({
    selector: 'page-hours',
    templateUrl: 'hours.html',
})
export class HoursPage implements OnInit {

    public hoursList: Array<any>;
    private selectedPonto;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController
    ) { }

    ngOnInit() {
        this.selectedPonto = this.navParams.get('selectedPonto');
        this.hoursList = Object.keys(this.selectedPonto)
    }

    openDetail(selectedHour) {
        let modal = this.modalCtrl.create(DetailsPage, { selectedHour: this.selectedPonto[selectedHour] });
        modal.present();
    }
}
