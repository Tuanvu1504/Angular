import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDestailComponent } from './product-destail.component';

describe('ProductDestailComponent', () => {
  let component: ProductDestailComponent;
  let fixture: ComponentFixture<ProductDestailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDestailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDestailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
