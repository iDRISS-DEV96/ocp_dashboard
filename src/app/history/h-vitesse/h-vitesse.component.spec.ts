import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HVitesseComponent } from './h-vitesse.component';

describe('HVitesseComponent', () => {
  let component: HVitesseComponent;
  let fixture: ComponentFixture<HVitesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HVitesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HVitesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
