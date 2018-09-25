import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoneyComponent } from './poney.component';

describe('PoneyComponent', () => {
  let component: PoneyComponent;
  let fixture: ComponentFixture<PoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
