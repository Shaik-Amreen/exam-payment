import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyExamsComponent } from './apply-exams.component';

describe('ApplyExamsComponent', () => {
  let component: ApplyExamsComponent;
  let fixture: ComponentFixture<ApplyExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
