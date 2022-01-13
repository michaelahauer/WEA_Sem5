import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';



@Component({
  selector: 'aaas-basic-linechart',
  templateUrl: './basic-linechart.component.html',
  styles: [
  ]
})
export class BasicLinechartComponent implements OnInit {
  @Input()
  data = new Array<number>();

  @Input()
  timestamps = new Array<string>();

  @Input()
  type: ChartType = "line";

  lineChartData?: Array<ChartDataset>;

  ngOnInit(): void {
    this.lineChartData = new Array(
      {
        data: this.data
      }
    );
  }

}
