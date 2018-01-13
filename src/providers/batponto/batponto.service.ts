import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { environment } from "../../config/environment";
import * as m from 'moment';

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

    getBaseHour() {
        return "08:00";
    }

    getBaseHourMin() {
        let baseHourArr = this.getBaseHour().split(':');
        return Number(baseHourArr[0]) * 60 + Number(baseHourArr[1]);
    }

    private getHoursByType(hoursList) {
        let hourKeys = Object.keys(hoursList);
        let dateType = { in: [], out: [] };
        hourKeys.forEach(detailKey => {
            const detail = hoursList[detailKey];
            const date = m(`${detail.date} ${detail.hour}`);

            if (detail.tpPonto === "E")
                dateType.in.push(date);
            else
                dateType.out.push(date);
        });

        return dateType;
    }

    private calculateTotWorkHoursByDay(datesIn: Array<any>, dateOut: Array<any>) {
        let totWorkHours = 0;
        for (let i = 0; i < datesIn.length; i++) {
            const hoursIn = datesIn[i];
            const hoursOut = dateOut[i];
            const diffHour = hoursOut.diff(hoursIn, "minutes");
            totWorkHours += diffHour;
        }
        return totWorkHours;
    }

    calculateExtraHours(pontosList: Array<any>) {
        const baseHourMin = this.getBaseHourMin();
        const pontosKeys = Object.keys(pontosList);
        let diffHourByDay = [];
        let totHours = 0;

        pontosKeys.forEach(pontoKey => {
            let dateType = this.getHoursByType(pontosList[pontoKey]);
            let totWorkHours = this.calculateTotWorkHoursByDay(dateType.in, dateType.out);

            const diff = totWorkHours - baseHourMin;
            diff > 0 && diffHourByDay.push(diff);
        });

        totHours = diffHourByDay.reduce((vrAnt, vrAt) => {
          return vrAnt + vrAt;
        }, 0);

        return totHours / 60;
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