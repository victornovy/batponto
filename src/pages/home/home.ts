import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatPontoProvider } from '../../providers/batponto/batponto.service';
import { Observable } from 'rxjs/Observable';
import { HoursPage } from '../hours/hours';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private pontosList: Array<any[]>;
    public pontosKeys: Array<any>;

    constructor(public navCtrl: NavController, public batPontoProvider: BatPontoProvider) {
        batPontoProvider.pontos.subscribe((pontosList) => {
            this.pontosList = pontosList;
            this.pontosKeys = Object.keys(pontosList);
        });
    }

    openPonto(selectedPt) {
        this.navCtrl.push(HoursPage, { 'selectedPonto' : this.pontosList[selectedPt]});
    }
}
