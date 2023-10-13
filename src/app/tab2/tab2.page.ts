import { Component, ViewChild } from '@angular/core';
import  Chart from 'chart.js/auto';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes

  constructor() {

  }

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  ngOnInit() {
    this.useAnotherOneWithWebpack();
  }
  useAnotherOneWithWebpack() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["TD", "CP", "AE", "DE", "AP", "DP", "CO", "CD"],
            datasets: [{
              label: "Hotest",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              data: [0, 10, 5, 2, 20, 30, 45],
              borderWidth: 1
            }]
       }
    });
  }
}

