import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1HelloComponent } from './a1-hello.component';

describe('A1HelloComponent', () => {
  let component: A1HelloComponent;
  let fixture: ComponentFixture<A1HelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [A1HelloComponent]
    });
    fixture = TestBed.createComponent(A1HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
