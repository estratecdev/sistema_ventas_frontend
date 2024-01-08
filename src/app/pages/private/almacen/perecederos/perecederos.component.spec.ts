import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerecederosComponent } from './perecederos.component';

describe('PerecederosComponent', () => {
  let component: PerecederosComponent;
  let fixture: ComponentFixture<PerecederosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerecederosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerecederosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
