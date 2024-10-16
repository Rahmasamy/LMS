import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizeAddComponent } from './quize-add.component';

describe('QuizeAddComponent', () => {
  let component: QuizeAddComponent;
  let fixture: ComponentFixture<QuizeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
