import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeditComponent } from './filmedit.component';

describe('FilmeditComponent', () => {
  let component: FilmeditComponent;
  let fixture: ComponentFixture<FilmeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
