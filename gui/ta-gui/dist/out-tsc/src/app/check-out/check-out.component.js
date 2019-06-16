import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CheckService } from '../check-in/check.service';
let CheckOutComponent = class CheckOutComponent {
    constructor(checkService) {
        this.checkService = checkService;
        this.checkout = false;
    }
    ngOnInit() {
    }
};
CheckOutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-check-out',
        templateUrl: './check-out.component.html',
        styleUrls: ['./check-out.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [CheckService])
], CheckOutComponent);
export { CheckOutComponent };
//# sourceMappingURL=check-out.component.js.map