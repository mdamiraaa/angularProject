import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhallsComponent } from './addhalls.component';

describe('AddhallsComponent', () => {
  let component: AddhallsComponent;
  let fixture: ComponentFixture<AddhallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
