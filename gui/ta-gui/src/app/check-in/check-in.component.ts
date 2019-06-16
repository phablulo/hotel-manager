import { Component, OnInit } from '@angular/core';
import { CheckService } from './check.service';
import { Form } from './form';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  diffDays = 2;
  constructor (private checkService: CheckService) {}
    
  form: Form = new Form();
  cadastro: Boolean = true;
  page1: Boolean = false;
  empresa: Boolean = false;
  Data1:Boolean = false;
  Data2: Boolean = false;
  Alterar:boolean = false;

  atualizar1() {
      this.Data1 = true;
      if (this.Data2 == true) {
          let x = this.form.Entrada;
          let y = this.form.Saida;
          let diffTime = Math.abs(y.getTime() - x.getTime());
          this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          this.Alterar = !this.Alterar;
          this.Alterar = !this.Alterar;
      }
  }

  atualizar2() {
    this.Data2 = true;
    if (this.Data1 == true) {
        let x = this.form.Entrada;
        let y = this.form.Saida;
        let diffTime = Math.abs(y.getTime() - x.getTime());
        this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.Alterar = !this.Alterar;
        this.Alterar = !this.Alterar;
    }
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
          }
      })
      .catch(erro => alert(erro));
  }

  ngOnInit() {
      
  }
}
