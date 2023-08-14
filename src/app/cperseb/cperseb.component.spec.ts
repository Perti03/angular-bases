import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpersebComponent } from './cperseb.component';

describe('CpersebComponent', () => {
  let component: CpersebComponent;
  let fixture: ComponentFixture<CpersebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpersebComponent]
    });
    fixture = TestBed.createComponent(CpersebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
