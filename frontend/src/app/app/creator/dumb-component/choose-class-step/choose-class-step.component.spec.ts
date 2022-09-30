import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseClassStepComponent } from './choose-class-step.component';

describe('ChooseClassStepComponent', () => {
  let component: ChooseClassStepComponent;
  let fixture: ComponentFixture<ChooseClassStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseClassStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseClassStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
