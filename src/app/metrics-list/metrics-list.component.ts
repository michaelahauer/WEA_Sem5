import { Component, OnInit } from '@angular/core';
import { Metric } from '../shared/metric';

@Component({
  selector: 'aaas-metrics-list',
  templateUrl: './metrics-list.component.html',
  styles: [
  ]
})
export class MetricsListComponent implements OnInit {

  metrics: Metric[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
