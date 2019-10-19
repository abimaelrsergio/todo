import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbimaelComponent } from './abimael.component';

describe('AbimaelComponent', () => {
  let component: AbimaelComponent;
  let fixture: ComponentFixture<AbimaelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbimaelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbimaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
