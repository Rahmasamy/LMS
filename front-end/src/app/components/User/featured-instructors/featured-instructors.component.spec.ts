import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInstructorsComponent } from './featured-instructors.component';

describe('FeaturedInstructorsComponent', () => {
  let component: FeaturedInstructorsComponent;
  let fixture: ComponentFixture<FeaturedInstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedInstructorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
