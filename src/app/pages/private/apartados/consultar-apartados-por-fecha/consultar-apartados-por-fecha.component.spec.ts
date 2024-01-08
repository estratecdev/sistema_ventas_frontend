import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarApartadosPorFechaComponent } from './consultar-apartados-por-fecha.component';

describe('ConsultarApartadosPorFechaComponent', () => {
  let component: ConsultarApartadosPorFechaComponent;
  let fixture: ComponentFixture<ConsultarApartadosPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarApartadosPorFechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarApartadosPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
