import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateCreateComponent } from './cate-create.component';

describe('CateCreateComponent', () => {
  let component: CateCreateComponent;
  let fixture: ComponentFixture<CateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
