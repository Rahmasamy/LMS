import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRouteAdminComponent } from './student-route-admin.component';

describe('StudentRouteAdminComponent', () => {
  let component: StudentRouteAdminComponent;
  let fixture: ComponentFixture<StudentRouteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRouteAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRouteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
