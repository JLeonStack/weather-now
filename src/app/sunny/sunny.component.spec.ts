import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnyComponent } from './sunny.component';

describe('SunnyComponent', () => {
  let component: SunnyComponent;
  let fixture: ComponentFixture<SunnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
