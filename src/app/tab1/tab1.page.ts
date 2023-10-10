import { Component, ViewChild } from '@angular/core';  
import { Chart } from 'chart.js';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {



  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {
    // @ts-ignore
    var chart = HighCharts.chart('container', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Hotest'
      },
      xAxis: {
        categories: ['DP', ' CD', 'CP']
      },
      yAxis: {
        title: {
          text: 'Taux doccup'
        }
      },
      series: [
        {
          name: 'nouvembre',
          type: undefined,
          data: [5, 10, 15]
        },
        {
          name: 'decembre',
          type: undefined,
          data: [20, 25, 31]
        }]
    });
  }

}

   



