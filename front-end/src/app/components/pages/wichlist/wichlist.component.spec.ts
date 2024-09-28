import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WichlistComponent } from './wichlist.component';

describe('WichlistComponent', () => {
  let component: WichlistComponent;
  let fixture: ComponentFixture<WichlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WichlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WichlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
