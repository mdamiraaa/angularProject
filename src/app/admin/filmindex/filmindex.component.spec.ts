import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmindexComponent } from './filmindex.component';

describe('FilmindexComponent', () => {
  let component: FilmindexComponent;
  let fixture: ComponentFixture<FilmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
