import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CheckService } from './check.service';
import { Form } from './form';
let CheckInComponent = class CheckInComponent {
    constructor(checkService) {
        this.checkService = checkService;
        this.diffDays = 2;
        this.form = new Form();
        this.cadastro = true;
        this.page1 = false;
        this.empresa = false;
        this.Data1 = false;
        this.Data2 = false;
        this.Alterar = false;
    }
    atualizar1() {
        this.Data1 = true;
        if (this.Data2 == true) {
            let x = this.form.Entrada;
            let y = this.form.Saida;
            let diffTime = Math.abs(y.getTime() - x.getTime());
            this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            this.Alterar = !this.Alterar;
            this.Alterar = !this.Alterar;
        }
    }
    atualizar2() {
        this.Data2 = true;
        if (this.Data1 == true) {
            let x = this.form.Entrada;
            let y = this.form.Saida;
            let diffTime = Math.abs(y.getTime() - x.getTime());
            this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            this.Alterar = !this.Alterar;
            this.Alterar = !this.Alterar;
        }
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
        this.page1 = !this.page1;
    }
    withCompany() {
        this.empresa = !this.empresa;
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
CheckInComponent = tslib_1.__decorate([
    Component({
        selector: 'app-check-in',
        templateUrl: './check-in.component.html',
        styleUrls: ['./check-in.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [CheckService])
], CheckInComponent);
export { CheckInComponent };
//# sourceMappingURL=check-in.component.js.map