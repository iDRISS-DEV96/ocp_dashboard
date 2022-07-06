import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HVapeurComponent } from './h-vapeur.component';

describe('HVapeurComponent', () => {
  let component: HVapeurComponent;
  let fixture: ComponentFixture<HVapeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HVapeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HVapeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
