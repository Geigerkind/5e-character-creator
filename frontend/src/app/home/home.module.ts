import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { HomeComponent } from "./dumb-component/home/home.component";
import { HomeRoutingModule } from "src/app/home/home-routing.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule, TranslateModule],
})
export class HomeModule {}
