import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractorComponent } from './instractor.component';

describe('InstractorComponent', () => {
  let component: InstractorComponent;
  let fixture: ComponentFixture<InstractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstractorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
