import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDePreciosComponent } from './historial-de-precios.component';

describe('HistorialDePreciosComponent', () => {
  let component: HistorialDePreciosComponent;
  let fixture: ComponentFixture<HistorialDePreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialDePreciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialDePreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
