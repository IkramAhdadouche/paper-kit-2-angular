import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloc1Component } from './bloc1.component';

describe('BasicelementsComponent', () => {
  let component: Bloc1Component;
  let fixture: ComponentFixture<Bloc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
