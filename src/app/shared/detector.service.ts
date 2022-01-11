import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SlidingDetector } from './sliding-detector';
import { BindingDetector } from './binding-detector';
import { Detector } from './detector';

@Injectable({
  providedIn: 'root'
})
export class DetectorService {
  
  detectors: Detector[] = [];
 
  constructor(private http: HttpClient) { 
    this.initDetectors();
  }


  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  } 

  getAll(): Observable<Detector[]> {
    return this.http.get<Detector[]>(`${environment.server}/Detector`);
  }  

  getDetectorById(id: number): Observable<Detector> {
    return this.http.get<Detector>(`${environment.server}/Detector/${id}`)
  }

  update(detector: SlidingDetector | BindingDetector): Observable<any>{
    return this.http.put(`${environment.server}/Detector`, detector)
      .pipe(catchError(this.errorHandler));
  }

  save(detector: Detector): Observable<any> {
    return this.http.post(`${environment.server}/Detector`, detector)
      .pipe(catchError(this.errorHandler));
  }

  private initDetectors() {

  }

}
