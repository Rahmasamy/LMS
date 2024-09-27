import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutorAnnouncementComponent } from './instrutor-announcement.component';

describe('InstrutorAnnouncementComponent', () => {
  let component: InstrutorAnnouncementComponent;
  let fixture: ComponentFixture<InstrutorAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrutorAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrutorAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
