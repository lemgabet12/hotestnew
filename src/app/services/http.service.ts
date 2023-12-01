import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private ResidentApiUrl = 'https://196.234.125.66:3084/hotel/countRack';
  RockData: any;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.ResidentApiUrl}`);
  }


}
