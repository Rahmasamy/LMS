import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnnouncementComponent } from './student-announcement.component';

describe('StudentAnnouncementComponent', () => {
  let component: StudentAnnouncementComponent;
  let fixture: ComponentFixture<StudentAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
