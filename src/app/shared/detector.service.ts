import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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

  getDetectorById(id: bigint): Observable<Detector> {
    return this.http.get<Detector>(`${environment.server}/Detector/${id}`)
  }

  update(detector: Detector): Observable<any>{
    return this.http.put(`${environment.server}/Detector`, detector)
      .pipe(catchError(this.errorHandler));
  }

  save(detector: Detector): Observable<any> {
    return this.http.post(`${environment.server}/Detector`, detector)
      .pipe(catchError(this.errorHandler));
  }

// TODO:
// GET /Detector/{id}/detection (start detection)

  private initDetectors() {

  }

}
