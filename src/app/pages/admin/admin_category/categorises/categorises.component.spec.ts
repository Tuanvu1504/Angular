import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorisesComponent } from './categorises.component';

describe('CategorisesComponent', () => {
  let component: CategorisesComponent;
  let fixture: ComponentFixture<CategorisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
