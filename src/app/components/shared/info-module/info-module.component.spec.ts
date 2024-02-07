import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModuleComponent } from './info-module.component';

describe('InfoModuleComponent', () => {
  let component: InfoModuleComponent;
  let fixture: ComponentFixture<InfoModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
