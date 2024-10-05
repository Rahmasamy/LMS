import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMainStudentComponent } from './dashbord-main-student.component';

describe('DashbordMainStudentComponent', () => {
  let component: DashbordMainStudentComponent;
  let fixture: ComponentFixture<DashbordMainStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordMainStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordMainStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
