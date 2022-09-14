import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSeccionComponent } from './formulario-seccion.component';

describe('FormularioSeccionComponent', () => {
  let component: FormularioSeccionComponent;
  let fixture: ComponentFixture<FormularioSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
