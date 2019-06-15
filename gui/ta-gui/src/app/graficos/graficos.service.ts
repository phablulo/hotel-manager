import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GraficosService {
  private taURL = 'http://localhost:3000';
  constructor(private http: Http) { }
  _generic(endpoint:String) : Promise<{String:Number}> {
    return this.http.get(this.taURL + '/graficos' + endpoint).toPromise()
    .then(response => response.json())
  }
  porDiaDaSemana() : Promise<{String:Number}> {
    return this._generic('/vendas-por-dia-da-semana')
  } 
  porTipoDeQuarto() : Promise<{String:Number}> {
    return this._generic('/vendas-por-tipo-de-quarto')
  }
  porPeriodo() : Promise<{String:Number}> {
    return this._generic('/vendas-por-periodo')
  }
}