import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeTogglerComponent } from './scheme-toggler.component';

describe('SchemeTogglerComponent', () => {
  let component: SchemeTogglerComponent;
  let fixture: ComponentFixture<SchemeTogglerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemeTogglerComponent]
    });
    fixture = TestBed.createComponent(SchemeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
