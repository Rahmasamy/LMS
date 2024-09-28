import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutorReferralsComponent } from './instrutor-referrals.component';

describe('InstrutorReferralsComponent', () => {
  let component: InstrutorReferralsComponent;
  let fixture: ComponentFixture<InstrutorReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrutorReferralsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrutorReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
