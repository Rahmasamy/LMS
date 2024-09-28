import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrucorEnrolledComponent } from './instrucor-enrolled.component';

describe('InstrucorEnrolledComponent', () => {
  let component: InstrucorEnrolledComponent;
  let fixture: ComponentFixture<InstrucorEnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrucorEnrolledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrucorEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
