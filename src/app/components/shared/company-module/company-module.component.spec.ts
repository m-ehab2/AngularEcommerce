import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyModuleComponent } from './company-module.component';

describe('CompanyModuleComponent', () => {
  let component: CompanyModuleComponent;
  let fixture: ComponentFixture<CompanyModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
