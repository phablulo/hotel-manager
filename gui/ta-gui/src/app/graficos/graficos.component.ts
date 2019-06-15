import { Component, OnInit } from '@angular/core';
import { GraficosService } from './graficos.service';
import Chart from 'chart.js'

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  constructor(private gs: GraficosService) { }
  ngOnInit() {
    this.gs.porTipoDeQuarto()
    .then(data => 
      this.chartJSConfigFrom(data, 'por tipo de quarto')  
    )
    .then(config => this.initChart('vendaTipoQuarto', config))

    this.gs.porDiaDaSemana()
    .then(data => 
      this.chartJSConfigFrom(data, 'por dia da semana')  
    )
    .then(config => this.initChart('vendaDiaSemana', config))

    this.gs.porPeriodo()
    .then(data => 
      this.chartJSConfigFrom(data, 'por período')  
    )
    .then(config => this.initChart('vendaPeriodo', config))

    this.gs.porHora()
    .then(data => 
      this.chartJSConfigFrom(data, 'por hora')  
    )
    .then(config => this.initChart('vendaHora', config))
  }

  initChart(element:string, config) {
    const context = (document.getElementById(element) as any).getContext('2d')
    new Chart(context, config)
  }
  chartJSConfigFrom(obj:{String:Number}, title:String) {
    const keys = Object.keys(obj)
    return {
      type: 'bar',
      data: {
        labels: keys,
        datasets: [{
          label: 'vendas',
          data: keys.map(x => obj[x]),
          backgroundColor: this.colors()
        }]
      },
      options: {
        legend: false,
        title: {
          display: true,
          text: 'Vendas '+title,
          fontSize: 30,
          fontColor: "#008B8B"
        },
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vendas',
            fontSize: 15
          }
        }]
      }
    }
  }
  colors() {
    return [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ]
  }
}
