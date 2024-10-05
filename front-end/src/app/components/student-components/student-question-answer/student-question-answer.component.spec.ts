import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuestionAnswerComponent } from './student-question-answer.component';

describe('StudentQuestionAnswerComponent', () => {
  let component: StudentQuestionAnswerComponent;
  let fixture: ComponentFixture<StudentQuestionAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentQuestionAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
