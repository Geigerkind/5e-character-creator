import { NgModule } from "@angular/core";
import { DndClassRepository } from "../domain/repositories/DndClassRepository";
import { Class5eToolsRepository } from "./repositories/Class5eToolsRepository";

@NgModule({
  providers: [{ provide: DndClassRepository, useClass: Class5eToolsRepository }],
})
export class InfrastructureModule {}
