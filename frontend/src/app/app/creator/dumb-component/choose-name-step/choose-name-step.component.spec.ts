import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNameStepComponent } from './choose-name-step.component';

describe('ChooseNameStepComponent', () => {
  let component: ChooseNameStepComponent;
  let fixture: ComponentFixture<ChooseNameStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseNameStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseNameStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
