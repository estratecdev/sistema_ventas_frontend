import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeTallerComponent } from './order-de-taller.component';

describe('OrderDeTallerComponent', () => {
  let component: OrderDeTallerComponent;
  let fixture: ComponentFixture<OrderDeTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDeTallerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderDeTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
