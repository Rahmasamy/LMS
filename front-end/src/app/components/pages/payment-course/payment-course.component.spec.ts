import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCourseComponent } from './payment-course.component';

describe('PaymentCourseComponent', () => {
  let component: PaymentCourseComponent;
  let fixture: ComponentFixture<PaymentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
