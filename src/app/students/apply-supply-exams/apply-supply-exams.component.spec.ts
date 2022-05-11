import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySupplyExamsComponent } from './apply-supply-exams.component';

describe('ApplySupplyExamsComponent', () => {
  let component: ApplySupplyExamsComponent;
  let fixture: ComponentFixture<ApplySupplyExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplySupplyExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplySupplyExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
