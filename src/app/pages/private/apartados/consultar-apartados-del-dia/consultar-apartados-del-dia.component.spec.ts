import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarApartadosDelDiaComponent } from './consultar-apartados-del-dia.component';

describe('ConsultarApartadosDelDiaComponent', () => {
  let component: ConsultarApartadosDelDiaComponent;
  let fixture: ComponentFixture<ConsultarApartadosDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarApartadosDelDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarApartadosDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
