import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
let CheckService = class CheckService {
    constructor(http) {
        this.http = http;
        this.headers = new Headers({ 'content-type': 'application/json' });
        this.taURL = 'http://localhost:3000';
    }
    checkIn(form) {
        return this.http.put(this.taURL + "/check", JSON.stringify(form), { headers: this.headers })
            .toPromise()
            .then(res => {
            if (res.json().sucess) {
                return form;
            }
            else if (res.json().fail) {
                return null;
            }
        });
    }
    checkIn2(form) {
        return this.http.post(this.taURL + "/check", JSON.stringify(form), { headers: this.headers })
            .toPromise()
            .then(res => {
            if (res.json().sucess) {
                return form;
            }
            else if (res.json().fail) {
                return null;
            }
        });
    }
    getQuarto() {
    }
};
CheckService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Http])
], CheckService);
export { CheckService };
//# sourceMappingURL=check.service.js.map