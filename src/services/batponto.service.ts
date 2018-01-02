import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { environment } from "../config/environment";

@Injectable()
export class BatPonto {

    private static dbName: string = environment.dbName;
    public items: Observable<any[]> = new Observable();

    constructor(public db: AngularFireDatabase) {
        this.items = db.list(BatPonto.dbName).valueChanges();
    }

}