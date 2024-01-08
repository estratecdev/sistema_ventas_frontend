import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVentasPorFechaComponent } from './consultar-ventas-por-fecha.component';

describe('ConsultarVentasPorFechaComponent', () => {
  let component: ConsultarVentasPorFechaComponent;
  let fixture: ComponentFixture<ConsultarVentasPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarVentasPorFechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarVentasPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
