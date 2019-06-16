import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Hotel Manager';
        this.url = window.location.href;
        if (this.url == "http://localhost:4200/") {
            this.homeActive = true;
        }
        else if (this.url == "http://localhost:4200/email") {
            this.emailActive = true;
        }
        else if (this.url == "http://localhost:4200/checkin") {
            this.checkActive = true;
        }
        else {
            this.graficoActive = true;
        }
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map