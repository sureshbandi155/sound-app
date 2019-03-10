import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopbackComponent } from './loopback.component';

describe('LoopbackComponent', () => {
  let component: LoopbackComponent;
  let fixture: ComponentFixture<LoopbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
