import { Component, OnInit } from '@angular/core';
import * as m from 'moment';
import { BatPontoProvider } from '../../providers/batponto/batponto.service';

@Component({
    selector: 'add-ponto',
    templateUrl: 'add-ponto.html'
})
export class AddPontoComponent implements OnInit {

    public dateTime;

    constructor(private batPontoProvider: BatPontoProvider) { }

    ngOnInit() {
        this.dateTime = m().format();
    }

    savePonto() {
        this.batPontoProvider.savePonto(this.dateTime);
    }
}