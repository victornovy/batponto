import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../config/environment';

@Injectable()
export class SettingsProvider {
    private static DBNAME: string = environment.dbName;

    constructor(public db: AngularFireDatabase) {}

    getInfo() {
        return this.db.object(`${SettingsProvider.DBNAME}/info`).valueChanges();
    }

    saveSettings(qtWorkHours: string) {
        let info = this.db.object(`${SettingsProvider.DBNAME}/info`);
        info.update({
            qtWorkHours
        })
    }

}
