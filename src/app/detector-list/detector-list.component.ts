import { Component, OnInit } from '@angular/core';
import { Detector } from '../shared/detector';

@Component({
  selector: 'aaas-detector-list',
  templateUrl: './detector-list.component.html',
  styles: [
  ]
})
export class DetectorListComponent implements OnInit {

  detectors: Detector[];

  constructor() { }

  ngOnInit(): void {
  }

}
