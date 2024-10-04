import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorRouteAdminComponent } from './instructor-route-admin.component';

describe('InstructorRouteAdminComponent', () => {
  let component: InstructorRouteAdminComponent;
  let fixture: ComponentFixture<InstructorRouteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorRouteAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorRouteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
