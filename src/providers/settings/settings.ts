import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../config/environment';
import { LoginProvider } from '../login/login';

@Injectable()
export class SettingsProvider {
    private static DBNAME: string = environment.dbName;

    constructor(public db: AngularFireDatabase, private loginProvider: LoginProvider) {}

    getInfo() {
        const userid = this.loginProvider.getUserId();
        return this.db
          .object(`${SettingsProvider.DBNAME}/${userid}/info`)
          .valueChanges();
    }

    saveSettings(qtWorkHours: string) {
        const userid = this.loginProvider.getUserId();
        let info = this.db.object(`${SettingsProvider.DBNAME}/${userid}/info`);
        info.update({
            qtWorkHours
        })
    }

}
