import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesYPrivilegiosComponent } from './roles-y-privilegios.component';

describe('RolesYPrivilegiosComponent', () => {
  let component: RolesYPrivilegiosComponent;
  let fixture: ComponentFixture<RolesYPrivilegiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesYPrivilegiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolesYPrivilegiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
