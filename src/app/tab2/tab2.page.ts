import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  googleChartLibrary: any;






  constructor() {

  }
  ngOnInit() {
    this.useVanillaJSLibrary();
  }
  useVanillaJSLibrary() {
    this.googleChartLibrary = (<any>window).google;
    // Load the Visualization API and the corechart package.
    this.googleChartLibrary.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.googleChartLibrary.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  drawChart () {
    // Create the data table.
    var data = new this.googleChartLibrary.visualization.DataTable();
    data.addColumn('string', 'Activity Name');
    data.addColumn('number', 'Hours');
    data.addRows([
      ['Départs Effectués', 8],
      ['Arrivées Effectués', 8],
      ['Arrivés Prévues', 2],
      ['Départs Prévues', 2],
      ['chb. Occupées', 2],
      ['Chambres Dispo', 2]
    ]);

    // Instantiate and draw our chart, passing in some options.
    var chart = new this.googleChartLibrary.visualization
      .PieChart(document.getElementById('pie-chart-div'));

    chart.draw(data, {
      'title': 'Activities',
      'width': 400,
      'height': 500,
      'padding': 500
    });
  }
}

