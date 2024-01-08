import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVentasPorMesComponent } from './consultar-ventas-por-mes.component';

describe('ConsultarVentasPorMesComponent', () => {
  let component: ConsultarVentasPorMesComponent;
  let fixture: ComponentFixture<ConsultarVentasPorMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarVentasPorMesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarVentasPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
