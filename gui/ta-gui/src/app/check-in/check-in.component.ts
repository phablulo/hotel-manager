import { Component, OnInit } from '@angular/core';
import { CheckService } from './check.service';
import { Form } from './form';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
    constructor (private checkService: CheckService) {}
    
    diffDays = 0;
    form: Form = new Form();
    cadastro: Boolean = true;
    page1: Boolean = false;
    empresa: Boolean = false;
    Data1:Boolean = false;
    Data2: Boolean = false;
    Display:boolean = false;
    ROOMS;

    
    atualizar1() {
        this.Data1 = true;
        if (this.Data2 == true) {
            let x = new Date(this.form.Entrada);
            let y = new Date(this.form.Saida);
            let diffTime = Math.abs(y.getTime() - x.getTime());
            this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
    }

    atualizar2() {
        this.Data2 = true;
        if (this.Data1 == true) {
            let x = new Date(this.form.Entrada);
            let y = new Date(this.form.Saida)
            let diffTime = Math.abs(y.getTime() - x.getTime());
            this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
    }

    getRoom() {
        alert("getRoom()");
        this.checkService.getQuarto()
        .then(ab => {
            if (ab != null) {
                this.ROOMS = Object.values(ab);
                this.Display = true;
              } else {
                  alert("erro ao receber quarto")
              }
        })
        .catch(erro => alert(erro));
    }

  checkInFunc (a: Form): void {
      this.checkService.checkIn(a)
      .then(ab => {
          if (ab != null) {
              this.form = ab;
            } else {
                this.cadastro = false;
            }
        })
        .catch(erro => alert(erro));
        this.page1 = !this.page1;
  }

  withCompany() {
      this.empresa = !this.empresa;
  }

  checkInFunc2(a: Form): void {
      this.checkService.checkIn2(a)
      .then(ab => {
          if (this.cadastro == false) {
              alert("Cadastro feito");
              this.cadastro = true;
          }
          if (ab != null) {
              alert("Check-in feito");
              this.form = new Form();
              this.getRoom();
          }
      })
      .catch(erro => alert(erro));
  }

  ngOnInit() {
      this.getRoom();
  }
}
