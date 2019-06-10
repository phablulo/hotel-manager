import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { EmailService } from './email/email.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'',component:HomePageComponent},
      {path:'email',component:EmailComponent}
    ]),
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
