import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarVentasComponent } from './realizar-ventas.component';

describe('RealizarVentasComponent', () => {
  let component: RealizarVentasComponent;
  let fixture: ComponentFixture<RealizarVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizarVentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealizarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
