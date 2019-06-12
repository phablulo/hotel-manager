import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmailService } from './email.service';
let EmailModule = class EmailModule {
};
EmailModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            EmailComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            AppRoutingModule
        ],
        providers: [EmailService],
        bootstrap: [EmailComponent],
    })
], EmailModule);
export { EmailModule };
//# sourceMappingURL=email.module.js.map