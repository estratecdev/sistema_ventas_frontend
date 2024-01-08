import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarComprasPorMesComponent } from './consultar-compras-por-mes.component';

describe('ConsultarComprasPorMesComponent', () => {
  let component: ConsultarComprasPorMesComponent;
  let fixture: ComponentFixture<ConsultarComprasPorMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarComprasPorMesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarComprasPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
