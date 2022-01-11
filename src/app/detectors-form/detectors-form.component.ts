import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetectorService } from '../shared/detector.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Detector } from '../shared/detector';
import { DetectorRFormErrorMessages } from './detector-rform-error-messages';
import { BindingDetector } from '../shared/binding-detector';
import { SlidingDetector } from '../shared/sliding-detector';
import { FlatDetector } from '../shared/flat-detector';
import { BindingDetectorDetails } from '../shared/binding-detector-details';
import { SlidingDetectorDetails } from '../shared/sliding-detector-details';


@Component({
  selector: 'aaas-detectors-form',
  templateUrl: './detectors-form.component.html',
  styles: [
  ]
})
export class DetectorsFormComponent implements OnInit {
  myForm!: FormGroup;
  detector = new Detector();
  errors: { [key: string]: string } = {};
  
  
  constructor(private fb: FormBuilder,
    private ds: DetectorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
          this.ds.getDetectorById(2).subscribe(detector => {this.detector = detector; console.log(detector); this.initForm()}));
    this.initForm();
  }


  initForm() {
    // we are using a FormBuilder to fill the Form-Model
    
    this.myForm = this.fb.group({                                         // hier definiere ich das Formular. Das Attribut entspricht dann dem FormControlName im html
      name: [this.detector.name, Validators.required],    
      pauseTimeInSec: [this.detector.pauseTimeInSec, Validators.required],     
      backTimeInSec: [this.detector.backTimeInSec, Validators.required], 
      createdTimestamp: [this.detector.createdTimestamp, Validators.required], 
      detectorType: [this.detector.detectorType, Validators.required],   // Boundary = 1, SlidingWindow = 2
      isActive: [this.detector.isActive, Validators.required], 		
      lastTriggered: [this.detector.lastTriggered], 

//SlidingWindowDetector:
      thresholdValue: this.detector.detail.thresholdValue, 
      timeWindowInSec: this.detector.detail.timeWindowInSec, 
      aggregationType: this.detector.detail.aggregationType, 			            // CurrentVal = 1, Sum = 2, Avg = 3
      comparisonOperation: this.detector.detail.comparisonOperation, 		      // Smaller = 1, Bigger = 2

//BoundaryDetector:
      lowerLimit: this.detector.detail.lowerLimit, 
      upperLimit: this.detector.detail.upperLimit, 
      maxAllowedOutlier: this.detector.detail.maxAllowedOutlier
    })
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());    // ErrorMessages aufbauen
  }

  updateForm(){
    console.log("bin im updateForm");
    this.detector.detectorType = Number(this.myForm.controls.detectorType.value);
  }

  submitForm() {  
    const tr: FlatDetector = this.myForm.value;
    if(tr.detectorType == 1){                                         //Boundary = 1
      console.log("lowerlimit:");
      console.log(tr.lowerLimit);
      console.log("---------------------------");
      const bnd = new BindingDetector(this.detector.id, 
                                      this.detector.metricId, 
                                      tr.pauseTimeInSec, 
                                      tr.backTimeInSec, 
                                      tr.name,
                                      tr.createdTimestamp,
                                      tr.detectorType,
                                      tr.isActive,
                                      this.detector.lastTriggered,
                                      new BindingDetectorDetails(tr.lowerLimit,tr.upperLimit,tr.maxAllowedOutlier));
      this.ds.update(bnd).subscribe(res => {                           // der in myForm.value ist wenn das Updaten fertig ist, dann wird wieder die Liste aufgerufen 
      this.router.navigate(['../detectors'], { relativeTo: this.route }); // relativeTo auf this is aber eh Standard. man könnt aber auch was anderes eingeben....
      });
    } else {
      const sld = new SlidingDetector(this.detector.id, 
                                      this.detector.metricId, 
                                      tr.pauseTimeInSec, 
                                      tr.backTimeInSec, 
                                      tr.name,
                                      tr.createdTimestamp,
                                      tr.detectorType,
                                      tr.isActive,
                                      this.detector.lastTriggered,
                                      new SlidingDetectorDetails(tr.thresholdValue,tr.timeWindowInSec,tr.aggregationType,tr.comparisonOperation)
                                      );
      this.ds.update(sld).subscribe(res => {                           // der in myForm.value ist wenn das Updaten fertig ist, dann wird wieder die Liste aufgerufen 
      this.router.navigate(['../detectors'], { relativeTo: this.route }); // relativeTo auf this is aber eh Standard. man könnt aber auch was anderes eingeben....
      });
    }
  }

  updateErrorMessages() {
    this.errors = {};
    
    for (const message of DetectorRFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors != null && 
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

}
