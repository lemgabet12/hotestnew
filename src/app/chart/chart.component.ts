import { HttpClient } from '@angular/common/http';
// src/app/components/chart/chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chart: any;
  data: any;

  constructor(private http: HttpClient ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/hotel/hotelState').subscribe((response) =>
    
    {
      this.data = response;
    }
    )
}
}