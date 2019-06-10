import { NgModule } from '@angular/core';
import { AppRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { EmailService } from './email.service';

@NgModule({
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
export class EmailModule { }