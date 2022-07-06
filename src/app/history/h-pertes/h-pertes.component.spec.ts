import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPertesComponent } from './h-pertes.component';

describe('HPertesComponent', () => {
  let component: HPertesComponent;
  let fixture: ComponentFixture<HPertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
