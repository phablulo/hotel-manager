import { Injectable } from '@angular/core';
import { Quarto } from './quarto';
import { Hospede } from './quarto';

@Injectable()
export class QuartoService {
  listaQuarto: Quarto[];
  constructor() {
    this.listaQuarto = [];
    for(var i = 0; i<20; i++){
      var tmp;
      tmp = new Quarto();
      tmp.numeroQuarto = new Number(200 + i);
      tmp.estado="livre";
      tmp.hospede = new Hospede();
      tmp.hospede.nome = "________"
      this.listaQuarto.push(tmp);
    }
    
  }

  atualizar(): Quarto{
    return new Quarto();
  }
  getQuartos(): Quarto[]{


    return this.listaQuarto;
  }




}