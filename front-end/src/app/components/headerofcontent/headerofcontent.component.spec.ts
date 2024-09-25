import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderofcontentComponent } from './headerofcontent.component';

describe('HeaderofcontentComponent', () => {
  let component: HeaderofcontentComponent;
  let fixture: ComponentFixture<HeaderofcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderofcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderofcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
