import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReferralsComponent } from './student-referrals.component';

describe('StudentReferralsComponent', () => {
  let component: StudentReferralsComponent;
  let fixture: ComponentFixture<StudentReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentReferralsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
