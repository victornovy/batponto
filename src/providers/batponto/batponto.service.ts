import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { environment } from "../../config/environment";
import * as m from 'moment';
import * as _ from "lodash";

@Injectable()
export class BatPontoProvider {
    private static DBNAME: string = environment.dbName;

    constructor(public db: AngularFireDatabase) {}

    private getDbObject(route: string) {
        return this.db.object(`${BatPontoProvider.DBNAME}/${route}`);
    }

    getPontosList() {
        return this.getDbObject("pontos").valueChanges();
    }

    getHourList(date: string) {
        return this.getDbObject(`pontos/${date}`).valueChanges();
    }

    filterPontosByType(pontosList: Array<any>, tpPonto: string) {
        let newList = [];
        _.pickBy(pontosList, hourList => {
            let filtered = _.filter(hourList, detail => {
                return !!detail.tpPonto && detail.tpPonto === tpPonto;
            });
            _.merge(newList, filtered);
        });
        return newList;
    }

    calculateHours(listTypeE: Array<any>, listTypeS: Array<any>) {
        _.reduce(listTypeE, (tot, item) => {
            let a = m(item.hour, 'HH:mm');
            return tot + a;
        }, 0);

        //console.log(listTypeE, listTypeS);
    }

    savePonto(dateTime: string, tpPonto: boolean, description: string) {
        let date = m(dateTime).format("YYYYMMDD");
        let hour = m(dateTime).format("HHmm");

        this.getDbObject(`pontos/${date}/${hour}`).update({
            date: m(dateTime).format("DD/MM/YYYY"),
            hour: m(dateTime).format("HH:mm"),
            tpPonto: tpPonto ? "E" : "S",
            description: description
        });
    }

    removeDate(date: string) {
        this.getDbObject(`pontos/${date}`).remove();
    }

    removeHour(date: string, hour: string) {
        this.getDbObject(`pontos/${date}/${hour}`).remove();
    }
}