import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Metric } from './metric';
import { MetricCounterValue } from './metric-counter-value';
import { Metricvalue } from './metricvalue';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  metrics: Metric[] = [];

  constructor(private http: HttpClient) {this.initMetrics(); }

  getAllMetrics(): Observable<Metric[]> {
    return this.http.get<Metric[]>(`${environment.server}/Metrics`);
  } 

  dateToString(date: Date) {
    const pad = (num: number) => num.toString().padStart(2, "0");
    let datePart = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    let timePart = `${pad(date.getHours())}%3A${pad(date.getMinutes())}`
    return datePart + "T" + timePart;
  }

  getValuesByMetricId(id: number): Observable<Metricvalue[]> {
    let start = new Date();
    start.setHours(start.getHours() -13);
    start.setMinutes(start.getMinutes() -4);
    let startmp = this.dateToString(start);
    let end = this.dateToString(new Date());
    console.log(startmp);
    console.log(end);

    return this.http.get<Metricvalue[]>
    (`${environment.server}/Metrics/MetricValues?MetricId=${id}&StartTimestamp=${startmp}&StopTimestamp=${end}`)

  }

  getCounterValueById(id: number): Observable<MetricCounterValue> {
    return this.http.get<MetricCounterValue>(
          `${environment.server}/Metrics/LatestCounterValue/${id}`)
  }




  private initMetrics() {  }


}
