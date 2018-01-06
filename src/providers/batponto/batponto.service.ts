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
        this.pontos = this.getDbObject('pontos').valueChanges();
    }

    private getDbObject(route: string) {
        return this.db.object(`${BatPontoProvider.DBNAME}/${route}`);
    }

    savePonto(dateTime) {
        let date = m(dateTime).format('YYYYMMDD');
        let hour = m(dateTime).format('HHmm');

        this.getDbObject(`pontos/${date}/${hour}`).update({
            date: m(dateTime).format('DD/MM/YYYY'),
            hour: m(dateTime).format('HH:mm')
        });
    }

    removeDate(date: string) {
        date = m(date).format('YYYYMMDD');
        this.getDbObject(`pontos/${date}`).remove();
    }

    removeHour(date: string, hour: string) {
        date = m(date).format('YYYYMMDD');
        hour = m(hour).format('HHmm');

        this.getDbObject(`pontos/${date}/${hour}`).remove();
    }
}