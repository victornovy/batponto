import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {
    private userId: number;
    private userInfo: any;

    constructor() {}

    setUserInfo(userInfo) {
        this.userInfo = userInfo;
    }

    getUserInfo() {
        return this.userInfo;
    }

    setUserId(uid) {
        this.userId = uid;
    }

    getUserId() {
        return this.userId;
    }
}
