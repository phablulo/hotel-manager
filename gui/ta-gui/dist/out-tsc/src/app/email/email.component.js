import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Email } from './email';
import { EmailService } from './email.service';
let EmailComponent = class EmailComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.email = new Email();
        this.enviado = false;
        this.naoenviado = false;
        this.sub = false;
        this.bod = false;
    }
    criarEmail(a) {
        if (a.body == "" || a.body == null) {
            this.bod = true;
        }
        else if (a.subject == "" || a.subject == null) {
            this.sub = true;
        }
        if (!this.bod && !this.sub) {
            this.emailService.criar(a)
                .then(ab => {
                if (ab) {
                    console.log(ab);
                    this.enviado = true;
                }
                else {
                    this.naoenviado = true;
                }
            })
                .catch(erro => alert(erro));
        }
    }
    onMove() {
        this.sub = false;
        this.bod = false;
    }
    ngOnInit() {
    }
};
EmailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-email',
        templateUrl: './email.component.html',
        styleUrls: ['./email.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [EmailService])
], EmailComponent);
export { EmailComponent };
//# sourceMappingURL=email.component.js.map