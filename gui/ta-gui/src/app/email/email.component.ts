import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
   constructor(private emailService: EmailService) {}

   email: Email = new Email();
   enviado: boolean = false;
   naoenviado: boolean = false;
   sub: boolean = false;
   bod: boolean = false;
   
   criarEmail(a: Email): void {
   
	   if (a.body == "" || a.body == null){
	   
	   this.bod = true;
	   
	   } else if (a.subject == "" || a.subject == null){
	   
	  	this.sub=true; 
	  	 } 
	     
	if(!this.bod && !this.sub){

	     this.emailService.criar(a)
	        .then(ab => {
	           if (ab) {
	           console.log(ab);
	           this.enviado = true;
	           } else {
	           this.naoenviado = true
	           }
	        })
	        .catch(erro => alert(erro));
			}        
   }

   onMove(): void {
      this.sub = false;
      this.bod = false;
   }


ngOnInit(): void {
     
   }


}