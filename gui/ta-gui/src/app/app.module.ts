import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { HttpModule } from '@angular/http';
import { GraficosComponent } from './graficos/graficos.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [EmailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
