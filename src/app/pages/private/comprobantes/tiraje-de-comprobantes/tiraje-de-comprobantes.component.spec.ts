import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirajeDeComprobantesComponent } from './tiraje-de-comprobantes.component';

describe('TirajeDeComprobantesComponent', () => {
  let component: TirajeDeComprobantesComponent;
  let fixture: ComponentFixture<TirajeDeComprobantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TirajeDeComprobantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TirajeDeComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
