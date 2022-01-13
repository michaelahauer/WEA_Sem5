import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Log } from '../shared/log';
import { LogEntity } from '../shared/log-entity';
import { LogSearch } from '../shared/log-search';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'aaas-logs-list',
  templateUrl: './logs-list.component.html',
  styles: [
  ]
})
export class LogsListComponent implements OnInit {
  logs: LogEntity[] = [];
  myForm!: FormGroup;
  searchString: string = '';
  @Input() length: Number = 1;
  @Input() pageSize: Number = 1000000;
  @Input() collectionSize: Number = 0;

  constructor(private fb: FormBuilder,
              private logService: LogService, 
              private route: ActivatedRoute, 
              private router: Router ) { }

  ngOnInit(): void {
    this.logService.getLogs(new LogSearch())
          .subscribe(res => {
            this.logs = res;
            console.log(res);this.initForm()
          }); 
    this.collectionSize = this.logs.length;
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
      name: [this.searchString]   
    })
  }

  updateList(){

    const search: LogSearch = new LogSearch();
    search.SearchText = this.myForm.get('name')?.value;

    this.logService.getLogs(search)
          .subscribe(res => {
            this.logs = res;
            console.log(res);this.initForm()
          });    
  }

}
