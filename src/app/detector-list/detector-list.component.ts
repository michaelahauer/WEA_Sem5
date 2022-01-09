import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detector } from '../shared/detector';
import { DetectorService } from '../shared/detector.service';

@Component({
  selector: 'aaas-detector-list',
  templateUrl: './detector-list.component.html',
  styles: [
  ]
})
export class DetectorListComponent implements OnInit {

  detectors: Detector[] = [];

  constructor(private detectorService: DetectorService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    this.detectorService.getAll().subscribe(res => {
      this.detectors = res
      console.log(this.detectors)
    });
  }

}
