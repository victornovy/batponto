import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as m from 'moment';
import { BatPontoProvider } from '../../providers/batponto/batponto.service';

@Component({
    selector: 'add-ponto',
    templateUrl: 'add-ponto.html'
})
export class AddPontoComponent implements OnInit {

    public dateTime;
    public tpPonto: boolean;
    public description: string;

    constructor(public navCtrl: NavController, private batPontoProvider: BatPontoProvider) { }

    ngOnInit() {
        this.dateTime = m().format();
    }

    savePonto() {
        this.batPontoProvider.savePonto(this.dateTime, this.tpPonto, this.description || '');
        this.navCtrl.pop();
    }
}