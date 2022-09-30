import { FormGroup } from "@angular/forms";
import { ChooseNameStepFormGroup } from "./choose-name-step.form-group";
import { ChooseClassStepFormGroup } from "./choose-class-step.form-group";

export class CreatorFormGroup extends FormGroup {
  chooseNameStepFormGroup: ChooseNameStepFormGroup;
  chooseClassStepFormGroup: ChooseClassStepFormGroup;

  constructor() {
    const chooseNameStep = new ChooseNameStepFormGroup();
    const chooseClassStep = new ChooseClassStepFormGroup();
    super({
      chooseNameStep: chooseNameStep,
      chooseClassStep: chooseClassStep,
    });

    this.chooseNameStepFormGroup = chooseNameStep;
    this.chooseClassStepFormGroup = chooseClassStep;
  }
}
