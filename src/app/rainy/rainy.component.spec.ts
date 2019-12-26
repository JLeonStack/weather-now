import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainyComponent } from './rainy.component';

describe('RainyComponent', () => {
  let component: RainyComponent;
  let fixture: ComponentFixture<RainyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
