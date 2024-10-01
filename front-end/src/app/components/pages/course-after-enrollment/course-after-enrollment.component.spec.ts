import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAfterEnrollmentComponent } from './course-after-enrollment.component';

describe('CourseAfterEnrollmentComponent', () => {
  let component: CourseAfterEnrollmentComponent;
  let fixture: ComponentFixture<CourseAfterEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseAfterEnrollmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseAfterEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
