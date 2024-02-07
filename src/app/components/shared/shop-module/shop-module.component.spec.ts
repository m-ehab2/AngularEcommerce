import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopModuleComponent } from './shop-module.component';

describe('ShopModuleComponent', () => {
  let component: ShopModuleComponent;
  let fixture: ComponentFixture<ShopModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
