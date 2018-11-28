import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilminfoComponent } from './filminfo.component';

describe('FilminfoComponent', () => {
  let component: FilminfoComponent;
  let fixture: ComponentFixture<FilminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
