import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitChartComponent } from './debit-chart.component';

describe('DebitChartComponent', () => {
  let component: DebitChartComponent;
  let fixture: ComponentFixture<DebitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
