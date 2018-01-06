import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { environment } from "../../config/environment";
import * as m from 'moment';

@Injectable()
export class BatPontoProvider {

    private static DBNAME: string = environment.dbName;
    public pontos: Observable<any> = new Observable();

    constructor(public db: AngularFireDatabase) {
        this.pontos = this.getDbObject().valueChanges();
    }

    private getDbObject() {
        return this.db.object(`${BatPontoProvider.DBNAME}/pontos`);
    }

    savePonto(dateTime) {
        let date = m(dateTime).format('YYYYMMDD');
        let hour = m(dateTime).format('HHmm');

        this.getDbObject().set({
            [date]: {
                [hour]: {
                    date: m(dateTime).format('DD/MM/YYYY'),
                    hour: m(dateTime).format('HH:mm')
                }
            }
        });
    }
}