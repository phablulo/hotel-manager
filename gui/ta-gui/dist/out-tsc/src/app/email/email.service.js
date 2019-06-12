import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.taURL = 'http://localhost:3000';
    }
    criar(email) {
        return this.http.post(this.taURL + "/email", JSON.stringify(email), { headers: this.headers })
            .toPromise()
            .then(res => {
            if (res.json().success) {
                return "Sucesso";
            }
            else {
                return null;
            }
        })
            .catch();
    }
};
EmailService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Http])
], EmailService);
export { EmailService };
//# sourceMappingURL=email.service.js.map