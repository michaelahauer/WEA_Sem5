import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Metric } from '../shared/metric';
import { MetricService } from '../shared/metric.service';

@Component({
  selector: 'aaas-metrics-list',
  templateUrl: './metrics-list.component.html',
  styles: [
  ]
})
export class MetricsListComponent implements OnInit {

  metrics: Metric[] = []

  constructor(private metricService: MetricService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.metricService.getAllMetrics().subscribe(res => {
      this.metrics = res
    })
  }

}
