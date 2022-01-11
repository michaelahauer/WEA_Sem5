import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Log } from './log';
import { LogEntity } from './log-entity';
import { LogSearch } from './log-search';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[] = [];

  constructor(private http: HttpClient) { 
    this.initLogs();
  }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  } 

  getLogs(search: LogSearch): Observable<LogEntity[]> {
    return this.http.get<LogEntity[]>(`${environment.server}/LogMessage/`+search)
  } 


  private initLogs() { }




}
