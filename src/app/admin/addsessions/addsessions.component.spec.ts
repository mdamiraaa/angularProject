import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsessionsComponent } from './addsessions.component';

describe('AddsessionsComponent', () => {
  let component: AddsessionsComponent;
  let fixture: ComponentFixture<AddsessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
