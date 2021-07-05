import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSucessfulComponent } from './order-sucessful.component';

describe('OrderSucessfulComponent', () => {
  let component: OrderSucessfulComponent;
  let fixture: ComponentFixture<OrderSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSucessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
