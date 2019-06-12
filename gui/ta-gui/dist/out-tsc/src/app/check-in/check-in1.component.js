import * as tslib_1 from "tslib";
var _a;
import { Component } from '@angular/core';
let CheckIn1Component = class CheckIn1Component {
    constructor(checkService) {
        this.checkService = checkService;
        this.form = new Form();
        this.cadastro = true;
    }
    checkInFunc(a) {
        this.checkService.checkIn(a)
            .then(ab => {
            if (ab != null) {
                this.form = ab;
            }
            else {
                this.cadastro = false;
            }
        })
            .catch(erro => alert(erro));
    }
    checkInFunc2(a) {
        this.checkService.checkIn2(a)
            .then(ab => {
            if (this.cadastro == false) {
                alert("Cadastro feito");
                this.cadastro = true;
            }
            if (ab != null) {
                alert("Check-in feito");
                this.form = new Form();
            }
        })
            .catch(erro => alert(erro));
    }
    ngOnInit() {
    }
};
CheckIn1Component = tslib_1.__decorate([
    Component({
        selector: 'app-check-in1',
        templateUrl: './check-in1.component.html',
        styleUrls: ['./check-in1.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof CheckService !== "undefined" && CheckService) === "function" ? _a : Object])
], CheckIn1Component);
export { CheckIn1Component };
//# sourceMappingURL=check-in1.component.js.map