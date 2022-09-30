import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ChooseClassStepFormGroup } from "../../form-groups/choose-class-step.form-group";

@Component({
  selector: "cm-choose-class-step",
  templateUrl: "./choose-class-step.component.html",
  styleUrls: ["./choose-class-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseClassStepComponent {
  @Input()
  chooseClassStepFormGroup: ChooseClassStepFormGroup;
}
