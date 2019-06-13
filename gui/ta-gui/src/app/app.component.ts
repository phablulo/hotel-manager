import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hotel Manager';
  url:string = window.location.href;

  homeActive:boolean;
  graficoActive:boolean;
  emailActive:boolean;
  checkActive:boolean;

  constructor(){
    if(this.url == "http://localhost:4200/"){
    
    this.homeActive = true;

    }else if(this.url == "http://localhost:4200/email"){

    this.emailActive = true;

    }else if(this.url == "http://localhost:4200/checkin"){

    this.checkActive = true;

    }else{

      this.graficoActive = true;

    }
    }
  
}
