import { Component, OnInit } from '@angular/core';
import {ExibirMapaDeQuartoService} from './exibir-mapa-de-quarto.service';
import {Quarto} from '../quarto/quarto'

@Component({
  selector: 'app-exibir-mq',
  templateUrl: './exibir-mapa-de-quarto.component.html',
  styleUrls: ['./exibir-mapa-de-quarto.component.css']
})
export class ExibirMapaDeQuartoComponent implements OnInit {
  mqService:ExibirMapaDeQuartoService;
  listQuartos:Quarto[];

  constructor() {
    this.mqService = new ExibirMapaDeQuartoService();
    this.listQuartos = this.mqService.listaQuarto;
   }

  ngOnInit() {
  }

}