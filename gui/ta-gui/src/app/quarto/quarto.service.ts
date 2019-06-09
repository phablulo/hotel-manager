import { Injectable } from '@angular/core';
import { Quarto } from './quarto'

@Injectable()
export class QuartoService {
  listaQuarto: Quarto[];
  constructor() {
    this.listaQuarto = [];
    for(var i = 0; i<19; i++){
      var tmp;
      tmp = new Quarto();
      tmp.numeroQuarto = new Number(200 + i);
      tmp.estado="livre";
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