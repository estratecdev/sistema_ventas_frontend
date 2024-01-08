import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCreditosComponent } from './administrar-creditos.component';

describe('AdministrarCreditosComponent', () => {
  let component: AdministrarCreditosComponent;
  let fixture: ComponentFixture<AdministrarCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarCreditosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
