import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRightsComponent } from './copy-rights.component';

describe('CopyRightsComponent', () => {
  let component: CopyRightsComponent;
  let fixture: ComponentFixture<CopyRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyRightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
