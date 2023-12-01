import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ChartService {

  constructor(private Http: HttpClient) { 
  }
  getData(): Observable<any> {
    return this.Http.get(URL + 'data');
  }
  getTotalData(): Observable<any> {
    return this.Http.get(URL+ 'total');
  }
}
