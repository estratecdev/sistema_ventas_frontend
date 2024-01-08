import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeComprobanteComponent } from './tipo-de-comprobante.component';

describe('TipoDeComprobanteComponent', () => {
  let component: TipoDeComprobanteComponent;
  let fixture: ComponentFixture<TipoDeComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoDeComprobanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoDeComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
