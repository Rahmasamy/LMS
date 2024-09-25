import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructoerWishlistComponent } from './instructoer-wishlist.component';

describe('InstructoerWishlistComponent', () => {
  let component: InstructoerWishlistComponent;
  let fixture: ComponentFixture<InstructoerWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructoerWishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructoerWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
