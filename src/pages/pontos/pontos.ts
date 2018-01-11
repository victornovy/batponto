import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatPontoProvider } from '../../providers/batponto/batponto.service';
import { HoursPage } from '../hours/hours';
import { AddPontoComponent } from '../../components/add-ponto/add-ponto';

@Component({
    selector: 'page-pontos',
    templateUrl: 'pontos.html'
})
export class PontosPage {

    private pontosList;
    public pontosKeys: Array<any>;

    constructor(
        public navCtrl: NavController,
        public batPontoProvider: BatPontoProvider
    ) {
        batPontoProvider.getPontosList().subscribe((pontosList) => {
            this.pontosList = pontosList;
            this.pontosKeys = !!pontosList ? Object.keys(pontosList) : [];
        });
    }

    get totHours() {

        if (!this.pontosList) {
            return 0;
        }

        const eList = this.batPontoProvider.filterPontosByType(this.pontosList, 'E');
        const sList = this.batPontoProvider.filterPontosByType(this.pontosList, "S");
        this.batPontoProvider.calculateHours(eList, sList);

        return 0;
    }

    openPonto(selectedPt) {
        const obj = {
            'hourList': this.pontosList[selectedPt],
            'date': selectedPt
        };
        this.navCtrl.push(HoursPage, obj);
    }

    addPonto() {
        this.navCtrl.push(AddPontoComponent);
    }

    deletePonto(pt: string) {
        this.batPontoProvider.removeDate(pt);
    }
}