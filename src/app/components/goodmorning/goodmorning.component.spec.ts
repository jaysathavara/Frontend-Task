import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodmorningComponent } from './goodmorning.component';

describe('GoodmorningComponent', () => {
  let component: GoodmorningComponent;
  let fixture: ComponentFixture<GoodmorningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodmorningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodmorningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
