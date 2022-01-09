import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsListComponent } from './metrics-list.component';

describe('MetricsListComponent', () => {
  let component: MetricsListComponent;
  let fixture: ComponentFixture<MetricsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
