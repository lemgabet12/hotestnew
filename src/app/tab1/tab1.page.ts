import { ChartService } from './../services/chart.service';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  chart: any;
  data: Data[] = [];
  ResidentApiUrl = '';
  ResidentDataAsArray: any[] = []
  RockData = {
    toto: '',
    totd: '',
    sum: '',
    toths: '',
    totlp: '',
    totr: '',
    dep: '',
    lib: '',
    totrr: '',
    arr: '',
    nbo: '',
    to: '',
    chd: '',
    s: '',
    r: '',
    totcham :'',
  };
  ShowMore: boolean = false;
  visible: boolean = true;
  expanded: any;

  ngOnInit() {
    this.readAPI(this.ResidentApiUrl)
      .subscribe((data: { lib: string; toto: string; totrr: string; toths: string; sum: string; chd: string; totlp: string; totr: string; arr: string; nbo: string; to: string; dep: string; s: string; r: string; totcham: string }) => {
        this.RockData.lib = data.lib;
        this.RockData.toto = data.toto;
        this.RockData.totrr = data.totrr;
        this.RockData.toths = data.toths;
        this.RockData.sum = data.sum;
        this.RockData.chd = data.chd;
        this.RockData.totlp = data.totlp;
        this.RockData.totr = data.totr;
        this.RockData.totr = data.totr;
        this.RockData.totlp = data.totlp;
        this.RockData.arr = data.arr;
        this.RockData.nbo = data.nbo;
        this.RockData.to = data.to;
        this.RockData.dep = data.dep;
        this.RockData.s = data.s;
        this.RockData.r = data.r;
        this.RockData.totcham = data.totcham;



        this.createChart(this.RockData);




      });
  }
  constructor(private http: HttpClient, private Resident: ChartService) {
    this.ResidentApiUrl = 'http://196.234.125.66:3084/hotel/countRack';
  }


  readAPI(URL: string) {
    return this.http.get<any>(URL);
  }
  onclick() {

    this.ShowMore = !this.ShowMore;
    this.visible = !this.visible
  }


  createChart(Resident: any) {
    this.ResidentDataAsArray.push(Resident.totd);

    this.ResidentDataAsArray.push(Resident.totl);

    this.ResidentDataAsArray.push(Resident.totr);









    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['CP', 'AE', 'vue mer'],
        datasets: [
          {
            label: 'Xlia static',
            data: this.ResidentDataAsArray,
            backgroundColor: [
              'black',
              'red',
              'yellow'

            ],
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





