import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { EmailService } from './email/email.service';
import { HttpModule } from '@angular/http';
import { GraficosComponent } from './graficos/graficos.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckService } from './check-in/check.service';
import { EmailListComponent } from './email-list/email-list.component';



@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    GraficosComponent,
    HomePageComponent,
    CheckInComponent,
    EmailListComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'',component:HomePageComponent},
      {path:'email',component:EmailComponent},
      {path:'checkin',component:CheckInComponent},
      {path:'grafico',component:GraficosComponent},
      {path:'emaillist',component:EmailListComponent}
    ]),
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
    
  ],
  providers: [EmailService, CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
