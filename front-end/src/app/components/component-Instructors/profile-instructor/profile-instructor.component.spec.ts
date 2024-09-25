import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInstructorComponent } from './profile-instructor.component';

describe('ProfileInstructorComponent', () => {
  let component: ProfileInstructorComponent;
  let fixture: ComponentFixture<ProfileInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
