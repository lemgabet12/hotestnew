import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import  Chart from 'chart.js/auto';
import { ChartService } from '../services/chart.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ResidentApiUrl: any;
  ResidentDataAsArray:any[]=[ ]
  RockData = {
    toto: '',
    totd: '',
    totl: '',
    toths : '',
    totlp :'',
    totr : '',
    totrr : '',
    
  };
  ngOnInit() {
    this.readAPI(this.ResidentApiUrl)
    .subscribe((data) => {
      console.log(data)
      this.RockData.toto = data.toto;  
    this.RockData.totd = data.totd ;
    this.RockData.toths = data.toths;
    this.RockData.totlp = data.totlp;
    this.RockData.totr = data.totr;
    this.RockData.totl = data.totl;
    this.RockData.totrr = data.totrr; 
    this.RockData.totrr = data.totrr;  
       console.log(this.RockData)
    
    this.createChartA(this.RockData);
    
    })
  }
  constructor(private http: HttpClient , private Resident: ChartService) {
    this.ResidentApiUrl = 'http://localhost:8080/hotel/countRack';
  }

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  readAPI(URL: string) {
    return this.http.get<any>(URL);
  }

  
  createChartA(Resident :any) {
    this.ResidentDataAsArray.push(Resident.totd );
    this.ResidentDataAsArray.push(Resident.toths);
    this.ResidentDataAsArray.push(Resident.totl);
    this.ResidentDataAsArray.push(Resident.totlp);
    this.ResidentDataAsArray.push(Resident.totr);
    this.ResidentDataAsArray.push(Resident.totlp);
    this.ResidentDataAsArray.push(Resident.totrr);
    
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["TD", "CP", "AE", "DE", "AP", "DP", "CO", "CD"],
            datasets: [{
              label: "Hotest",
             
              borderColor: [
                'blue',
                'black',
                'red',
                'yellow',
                'orange',
                'indigo',
                'pnik',
                'olive'
              ],
              data: this.ResidentDataAsArray,
              borderWidth: 1
            }]
       }
    });
  }
}

