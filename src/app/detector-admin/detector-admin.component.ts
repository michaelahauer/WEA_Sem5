import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detector } from '../shared/detector';
import { DetectorService } from '../shared/detector.service';

@Component({
  selector: 'aaas-detector-admin',
  templateUrl: './detector-admin.component.html',
  styles: [
  ]
})
export class DetectorAdminComponent implements OnInit {

  @Input() detector: Detector = new Detector();
  @Output() showListEvent = new EventEmitter;

  constructor(private detectorService: DetectorService
            , private route: ActivatedRoute
            , private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => 
            this.detectorService.getDetectorById(params['id'])
                    .subscribe(detector => this.detector = detector))
  }

  showDetectorsList() {
    this.router.navigateByUrl("/detectors");
   }

}
