import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangDropdownComponent } from './lang-dropdown.component';

describe('LangDropdownComponent', () => {
  let component: LangDropdownComponent;
  let fixture: ComponentFixture<LangDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
