import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinklistComponent } from './drinklist.component';

describe('DrinklistComponent', () => {
  let component: DrinklistComponent;
  let fixture: ComponentFixture<DrinklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
