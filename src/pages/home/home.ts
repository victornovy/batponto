import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatPonto } from '../../services/batponto.service';
import { Observable } from 'rxjs/Observable';
import { HoursPage } from '../hours/hours';
import * as m from 'moment';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private pontosList: Array<any[]>;
    public pontosKeys: Array<any>;

    constructor(public navCtrl: NavController, public batPonto: BatPonto) {
        batPonto.pontos.subscribe((pontosList) => {
            this.pontosList = pontosList;
            this.pontosKeys = Object.keys(pontosList);
        });
    }

    openPonto(selectedPt) {
        this.navCtrl.push(HoursPage, { 'selectedPonto' : this.pontosList[selectedPt]});
    }
}
