import { Component } from "@angular/core";
import { Character } from "../../../../domain/entities/Character";
import { CreatorFormGroup } from "../../form-groups/creator.form-group";
import { DndClassRepository } from "../../../../domain/repositories/DndClassRepository";
import { Observable } from "rxjs";
import { DndClass } from "../../../../domain/value_objects/DndClass";

@Component({
  selector: "cm-creator-component",
  templateUrl: "./creator.component.html",
  styleUrls: ["./creator.component.scss"],
})
export class CreatorComponent {
  creatorFormGroup: CreatorFormGroup;
  dndClasses: Observable<DndClass[]>;

  character: Character;

  constructor(private dndClassRepository: DndClassRepository) {
    this.creatorFormGroup = new CreatorFormGroup();
    this.dndClasses = dndClassRepository.getDndClasses();
  }
}
