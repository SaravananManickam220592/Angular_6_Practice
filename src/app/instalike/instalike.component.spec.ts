import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalikeComponent } from './instalike.component';

describe('InstalikeComponent', () => {
  let component: InstalikeComponent;
  let fixture: ComponentFixture<InstalikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
