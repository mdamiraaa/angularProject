import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaeditComponent } from './cinemaedit.component';

describe('CinemaeditComponent', () => {
  let component: CinemaeditComponent;
  let fixture: ComponentFixture<CinemaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
