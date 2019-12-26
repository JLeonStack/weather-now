import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowyComponent } from './snowy.component';

describe('SnowyComponent', () => {
  let component: SnowyComponent;
  let fixture: ComponentFixture<SnowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
