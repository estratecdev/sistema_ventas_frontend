import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirNuevoInventarioComponent } from './abrir-nuevo-inventario.component';

describe('AbrirNuevoInventarioComponent', () => {
  let component: AbrirNuevoInventarioComponent;
  let fixture: ComponentFixture<AbrirNuevoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirNuevoInventarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrirNuevoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
