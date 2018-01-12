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
        let pontosKeys = Object.keys(pontosList);
        pontosKeys.forEach(pontoKey => {
            let hourList = pontosList[pontoKey];
            let hourKeys = Object.keys(hourList);
            hourKeys.forEach(detailKey => {
                const detail = hourList[detailKey];
                newList.push(detail);
                //const hour = m(detail.hour, 'HH:mm').format('HHmm');
            });
        });

        newList.sort((a, b) => {
            return m(a.hour, "HH:mm").format("HHmm") - m(b.hour, "HH:mm").format("HHmm");
        });

        /*_.pickBy(pontosList, hourList => {
            let filtered = _.filter(hourList, detail => {
                return !!detail.tpPonto && detail.tpPonto === tpPonto;
            });
            _.merge(newList, filtered);
        });*/
        // _.pickBy(pontosList, hourList => {
        //     let filtered = _.sortBy(hourList, [{hour: -1}]);
        //     console.log(filtered);
        //     //_.merge(newList, filtered);
        //     //console.log(filtered);
        // });
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