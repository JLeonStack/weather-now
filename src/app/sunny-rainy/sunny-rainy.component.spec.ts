import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnyRainyComponent } from './sunny-rainy.component';

describe('SunnyRainyComponent', () => {
  let component: SunnyRainyComponent;
  let fixture: ComponentFixture<SunnyRainyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunnyRainyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnyRainyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
