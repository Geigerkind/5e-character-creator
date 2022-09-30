import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ChooseNameStepFormGroup extends FormGroup {
  constructor() {
    super({
      name: new FormControl("", Validators.required),
    });
  }
}
