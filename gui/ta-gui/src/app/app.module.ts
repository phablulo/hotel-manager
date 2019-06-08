import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExibirMapaDeQuartoComponent } from './exibir-mapa-de-quarto/exibir-mapa-de-quarto.component';
import { ExportarMapaDeQuartoComponent } from './exportar-mapa-de-quarto/exportar-mapa-de-quarto.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ExibirMapaDeQuartoComponent, ExportarMapaDeQuartoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
