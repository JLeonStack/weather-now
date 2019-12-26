import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricStormsComponent } from './electric-storms.component';

describe('ElectricStormsComponent', () => {
  let component: ElectricStormsComponent;
  let fixture: ComponentFixture<ElectricStormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricStormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricStormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
