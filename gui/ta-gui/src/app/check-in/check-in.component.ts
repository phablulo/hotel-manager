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
    ROOMS: number[] = [];
    PRECO: number[] = [];

    
    atualizar1() {
        this.Data1 = true;
        if (this.Data2 == true) {
            let x = new Date(this.form.Entrada);
            let y = new Date(this.form.Saida);
            let diffTime = Math.abs(y.getTime() - x.getTime());
            this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            console.log(this.form.UHNumero);
            let z = this.PRECO[this.ROOMS.indexOf(parseInt(this.form.UHNumero))];
            this.diffDays *= z;
        }
    }

    atualizar2() {
        this.Data2 = true;
        if (this.Data1 == true) {
            let x = new Date(this.form.Entrada);
            let y = new Date(this.form.Saida)
            let diffTime = Math.abs(y.getTime() - x.getTime());
            this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            console.log(this.form.UHNumero);
            let z = this.PRECO[this.ROOMS.indexOf(parseInt(this.form.UHNumero))];
            this.diffDays *= z;
        }
    }

    getRoom() {
        this.checkService.getQuarto()
        .then(ab => {
            if (ab != null) {
                let data = JSON.stringify(ab);
                data = JSON.parse(data);
                let x = Object.values(data);
                for (let i = 0; i < data.length; i ++) {
                    this.ROOMS.push(parseInt(Object.values(x[i])[0]));
                    //temp.push(parseInt(Object.values(data[i])));
                }
                this.Display = true;
              } else {
                  alert("erro ao receber quarto")
              }
        })
        .catch(erro => alert(erro));
    }

    getRoom1() {
        this.checkService.getQuarto1()
        .then(ab => {
            if (ab != null) {
                let data = JSON.stringify(ab);
                data = JSON.parse(data);
                let x = Object.values(data);
                for (let i = 0; i < data.length; i ++) {
                    this.PRECO.push(parseInt(Object.values(x[i])[0]));
                    //temp.push(parseInt(Object.values(data[i])));
                }
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
              console.log(JSON.stringify(ab));
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
          if (this.cadastro) {
            alert("Atualização feita");
          }
          if (ab != null) {
              alert("Check-in feito");
              this.form = new Form();
              this.getRoom();
              window.location.href = 'http://localhost:4200'
          }
      })
      .catch(erro => alert(erro));
  }

  

  ngOnInit() {
      this.getRoom();
      this.getRoom1();
  }
}
