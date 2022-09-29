import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DndClassRepository } from "../../../domain/repositories/DndClassRepository";

@Component({
  selector: "cvms-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(translateService: TranslateService, dndClassRepository: DndClassRepository) {
    translateService.setDefaultLang("en");
    dndClassRepository.getDndClasses().subscribe(res => {
      console.log(res);
    });
  }
}
