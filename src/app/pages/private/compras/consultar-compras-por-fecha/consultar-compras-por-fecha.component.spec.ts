import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarComprasPorFechaComponent } from './consultar-compras-por-fecha.component';

describe('ConsultarComprasPorFechaComponent', () => {
  let component: ConsultarComprasPorFechaComponent;
  let fixture: ComponentFixture<ConsultarComprasPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarComprasPorFechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarComprasPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
