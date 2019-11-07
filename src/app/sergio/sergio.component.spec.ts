import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SergioComponent } from './sergio.component';

describe('SergioComponent', () => {
  let component: SergioComponent;
  let fixture: ComponentFixture<SergioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SergioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SergioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
