import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { environment } from "../../config/environment";
import * as m from 'moment';

@Injectable()
export class BatPontoProvider {

    private static DBNAME: string = environment.dbName;

    constructor(public db: AngularFireDatabase) { }

    private getDbObject(route: string) {
        return this.db.object(`${BatPontoProvider.DBNAME}/${route}`);
    }

    getPontosList() {
        return this.getDbObject('pontos').valueChanges();
    }

    getHourList(date: string) {
        return this.getDbObject(`pontos/${date}`).valueChanges();
    }

    savePonto(dateTime: string, tpPonto: boolean, description: string) {
        let date = m(dateTime).format('YYYYMMDD');
        let hour = m(dateTime).format('HHmm');

        this.getDbObject(`pontos/${date}/${hour}`).update({
            date: m(dateTime).format('DD/MM/YYYY'),
            hour: m(dateTime).format('HH:mm'),
            tpPonto: tpPonto ? 'E' : 'S',
            description: description,
        });
    }

    removeDate(date: string) {
        this.getDbObject(`pontos/${date}`).remove();
    }

    removeHour(date: string, hour: string) {
        this.getDbObject(`pontos/${date}/${hour}`).remove();
    }
}