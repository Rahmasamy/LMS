import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMainInstructorComponent } from './dashbord-main-instructor.component';

describe('DashbordMainInstructorComponent', () => {
  let component: DashbordMainInstructorComponent;
  let fixture: ComponentFixture<DashbordMainInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordMainInstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordMainInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
