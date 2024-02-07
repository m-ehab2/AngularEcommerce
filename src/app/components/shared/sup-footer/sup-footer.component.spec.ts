import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupFooterComponent } from './sup-footer.component';

describe('SupFooterComponent', () => {
  let component: SupFooterComponent;
  let fixture: ComponentFixture<SupFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
