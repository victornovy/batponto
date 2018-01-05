import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { environment } from "../../config/environment";

@Injectable()
export class BatPontoProvider {

    private static dbName: string = environment.dbName;
    public pontos: Observable<any> = new Observable();

    constructor(public db: AngularFireDatabase) {
        this.pontos = db.object(`${BatPontoProvider.dbName}/pontos`).valueChanges();
    }

}