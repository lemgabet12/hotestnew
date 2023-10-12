import { Component, ViewChild } from '@angular/core';  
import { Chart } from 'chart.js';
import * as HighCharts from 'highcharts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  chart: any;
  movieApiUrl = '';
  HotelData = {
    imdbRating: '',
    imdbVotes: '',
    Released: '',
    Runtime : '',
    Year : '',
    DVD: '',
    Metascore:'',
  };

  
constructor( private http: HttpClient){

  this.movieApiUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=ffb23b0';
this.readAPI(this.movieApiUrl)
  .subscribe((data) => {
  console.log(data);
  this.HotelData.imdbRating = data['imdbRating'];
  this.HotelData.imdbVotes = data['imdbVotes'];
  this.HotelData.Released = data['Released'];
  this.HotelData.Runtime = data['Runtime'];
  this.HotelData.Year = data['Year'];
  this.HotelData.DVD = data['DVD'];
  this.HotelData.Metascore = data['Metascore'];
  
});

}
  readAPI(URL: string) {
    return this.http.get<any>(URL);
  }

  ngOnInit() {
    this.createBarChart();
  }
  createBarChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['TO', 'CP', 'AE', 'DE', 'AP', 'DP','CO','CD'],
        datasets: [
          {
            label: 'DATA',
            data: [12, 19, 3, 5, 2, 3,4,25],
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'green',
              'purple',
              'orange',
              'black',
              'pink',
            ],
          },
        ],
      },
    });
  }
}

   



