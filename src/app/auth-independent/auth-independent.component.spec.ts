import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthIndependentComponent } from './auth-independent.component';

describe('AuthIndependentComponent', () => {
  let component: AuthIndependentComponent;
  let fixture: ComponentFixture<AuthIndependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthIndependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
