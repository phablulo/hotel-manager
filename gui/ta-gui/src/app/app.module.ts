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
import { GraficosService } from './graficos/graficos.service';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailPathComponent } from './email-path/email-path.component';
import { EmailListService } from './email-list/emaillist.service';


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    GraficosComponent,
    HomePageComponent,
    CheckInComponent,
    EmailListComponent,
    EmailPathComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'',component:HomePageComponent},
      {path:'email',component:EmailComponent},
      {path:'checkin',component:CheckInComponent},
      {path:'grafico',component:GraficosComponent},
      {path:'emaillist',component:EmailListComponent},
      {path:'emailpath',component:EmailPathComponent}
    ]),
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
    
  ],
  providers: [EmailService, CheckService, EmailListService, GraficosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
