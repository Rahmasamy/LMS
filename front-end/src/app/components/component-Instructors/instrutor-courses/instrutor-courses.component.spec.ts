import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutorCoursesComponent } from './instrutor-courses.component';

describe('InstrutorCoursesComponent', () => {
  let component: InstrutorCoursesComponent;
  let fixture: ComponentFixture<InstrutorCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrutorCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrutorCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
