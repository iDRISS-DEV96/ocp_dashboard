import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcpNavBarComponent } from './ocp-nav-bar.component';

describe('OcpNavBarComponent', () => {
  let component: OcpNavBarComponent;
  let fixture: ComponentFixture<OcpNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcpNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcpNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
