import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatPonto } from '../../services/batponto.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public items: Observable<any[]>;

    constructor(public navCtrl: NavController, public batPonto: BatPonto) {
        this.items = batPonto.items;
    }

}
