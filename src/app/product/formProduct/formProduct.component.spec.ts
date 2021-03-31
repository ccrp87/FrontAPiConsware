import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductComponent } from './formProduct.component';

describe('FormComponent', () => {
  let component: FormProductComponent;
  let fixture: ComponentFixture<FormProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
