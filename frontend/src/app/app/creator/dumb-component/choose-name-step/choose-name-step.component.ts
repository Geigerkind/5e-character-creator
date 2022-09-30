import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ChooseNameStepFormGroup } from "../../form-groups/choose-name-step.form-group";

@Component({
  selector: "cm-choose-name-step",
  templateUrl: "./choose-name-step.component.html",
  styleUrls: ["./choose-name-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseNameStepComponent {
  @Input()
  chooseNameStepFormGroup: ChooseNameStepFormGroup;
}
