import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashbordComponent } from './instructor-dashbord.component';

describe('InstructorDashbordComponent', () => {
  let component: InstructorDashbordComponent;
  let fixture: ComponentFixture<InstructorDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashbordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
