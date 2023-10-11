import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent  implements OnInit {
  @ViewChild('barChart') barChart: any;
  chart: any;
  constructor() { }

  ngOnInit() {
   
      this.chart = new Chart(this.barChart.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
          datasets: [
            {
              label: 'Sample Data',
              data: [12, 19, 3, 5, 2],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
  


