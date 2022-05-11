import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentshomeComponent } from './studentshome.component';

describe('StudentshomeComponent', () => {
  let component: StudentshomeComponent;
  let fixture: ComponentFixture<StudentshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
