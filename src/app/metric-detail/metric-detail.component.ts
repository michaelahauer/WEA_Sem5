import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetricService } from '../shared/metric.service';
import { Metricvalue } from '../shared/metricvalue';

@Component({
  selector: 'aaas-metric-detail',
  templateUrl: './metric-detail.component.html',
  styles: [
  ]
})
export class MetricDetailComponent implements OnInit {
  values: Metricvalue[] = [];
  chartData: number[] = [];
  labels: string[] = [];
  isLoaded = false;

  constructor(private ms: MetricService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.ms.getValuesByMetricId(id).subscribe(v => 
      {
        this.values = v;
        this.parseData();
        this.isLoaded = true;
      })
  }

  parseData() {
    for (let item of this.values) {
      this.labels.push(item.timestamp);
      this.chartData.push(item.value);
    }

    console.log(this.values[1]);
    console.log(this.labels);
    console.log(this.chartData);
    //return [data.map(obj => obj.value), data.map(obj => obj.Timestamp)];
  }


}
