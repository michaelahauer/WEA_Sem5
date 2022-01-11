import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Metric } from './metric';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  metrics: Metric[] = [];

  constructor(private http: HttpClient) {this.initMetrics(); }



  private initMetrics() {  }


}
