import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartarProductosComponent } from './apartar-productos.component';

describe('ApartarProductosComponent', () => {
  let component: ApartarProductosComponent;
  let fixture: ComponentFixture<ApartarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartarProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApartarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
