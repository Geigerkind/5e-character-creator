import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CreatorComponent } from "./smart-component/creator/creator.component";

const routes: Routes = [{ path: "", component: CreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorRoutingModule {}
