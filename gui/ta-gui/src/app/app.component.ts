import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string;
  url:string = window.location.href;

  homeActive:boolean;
  graficoActive:boolean;
  emailActive:boolean;
  checkActive:boolean;

  constructor(){
    if(this.url == "http://localhost:4200/"){
    this.title = "Hotel Manager";
    this.homeActive = true;

    }else if(this.url == "http://localhost:4200/email"||this.url == "http://localhost:4200/emaillist"||this.url == "http://localhost:4200/emailpath"){
    this.title = "Email - Hotel Manager";
    this.emailActive = true;

    }else if(this.url == "http://localhost:4200/checkin"){
      this.title = "Checkin - Hotel Manager";
    this.checkActive = true;

    }else{
      this.title = "Graficos - Hotel Manager";
      this.graficoActive = true;

    }
    }
  
}
