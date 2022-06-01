import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditorialComponent } from './formulario-editorial.component';

describe('FormularioEditorialComponent', () => {
  let component: FormularioEditorialComponent;
  let fixture: ComponentFixture<FormularioEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
