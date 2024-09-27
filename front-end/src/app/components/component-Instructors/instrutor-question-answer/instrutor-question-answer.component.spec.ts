import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutorQuestionAnswerComponent } from './instrutor-question-answer.component';

describe('InstrutorQuestionAnswerComponent', () => {
  let component: InstrutorQuestionAnswerComponent;
  let fixture: ComponentFixture<InstrutorQuestionAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrutorQuestionAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrutorQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
