import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailsPage } from "../details/details";
import { BatPontoProvider } from '../../providers/batponto/batponto.service';

@IonicPage()
@Component({
    selector: 'page-hours',
    templateUrl: 'hours.html',
})
export class HoursPage implements OnInit {

    public hoursList: Array<any>;
    public selectedDate: string;
    private selectedHours;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public batPontoProvider: BatPontoProvider
    ) { }

    ngOnInit() {
        this.selectedDate = this.navParams.get('date');

        this.batPontoProvider.getHourList(this.selectedDate)
            .subscribe( (hourList) => {
                this.selectedHours = hourList;
                this.hoursList = !!hourList ? Object.keys(hourList) : [];
            });
    }

    openDetail(selectedHour) {
        let modal = this.modalCtrl.create(DetailsPage, { selectedHour: this.selectedHours[selectedHour] });
        modal.present();
    }

    deleteHour(hr: string) {
        this.batPontoProvider.removeHour(this.selectedDate, hr);
    }
}
