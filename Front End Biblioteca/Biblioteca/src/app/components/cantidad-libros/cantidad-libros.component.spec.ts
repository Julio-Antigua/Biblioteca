import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadLibrosComponent } from './cantidad-libros.component';

describe('CantidadLibrosComponent', () => {
  let component: CantidadLibrosComponent;
  let fixture: ComponentFixture<CantidadLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
