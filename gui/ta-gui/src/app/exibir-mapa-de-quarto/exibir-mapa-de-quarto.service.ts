import { Injectable } from '@angular/core';



import { QuartoService } from '../quarto/quarto.service';
import {Quarto} from '../quarto/quarto'

@Injectable()
export class ExibirMapaDeQuartoService {
  quartoService: QuartoService;
  listaQuarto: Quarto[];


  constructor() { 
    this.quartoService = new QuartoService();
    this.listaQuarto = this.quartoService.getQuartos();
  }

}