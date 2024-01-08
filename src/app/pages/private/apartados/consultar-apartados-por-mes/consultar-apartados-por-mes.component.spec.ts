import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarApartadosPorMesComponent } from './consultar-apartados-por-mes.component';

describe('ConsultarApartadosPorMesComponent', () => {
  let component: ConsultarApartadosPorMesComponent;
  let fixture: ComponentFixture<ConsultarApartadosPorMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarApartadosPorMesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarApartadosPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
