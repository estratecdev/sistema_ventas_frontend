import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVentasDelDiaComponent } from './consultar-ventas-del-dia.component';

describe('ConsultarVentasDelDiaComponent', () => {
  let component: ConsultarVentasDelDiaComponent;
  let fixture: ComponentFixture<ConsultarVentasDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarVentasDelDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarVentasDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
