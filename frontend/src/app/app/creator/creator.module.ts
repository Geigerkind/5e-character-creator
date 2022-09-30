import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { CreatorRoutingModule } from "src/app/app/creator/creator-routing.module";
import { MatStepperModule } from "@angular/material/stepper";
import { CreatorComponent } from "./smart-component/creator/creator.component";
import { InfrastructureModule } from "../../infrastructure/infrastructure.module";
import { DomainModule } from "../../domain/domain.module";
import { ChooseNameStepComponent } from "./dumb-component/choose-name-step/choose-name-step.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ChooseClassStepComponent } from './dumb-component/choose-class-step/choose-class-step.component';

@NgModule({
  declarations: [CreatorComponent, ChooseNameStepComponent, ChooseClassStepComponent],
  imports: [
    CreatorRoutingModule,
    InfrastructureModule,
    DomainModule,
    SharedModule,
    TranslateModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
})
export class CreatorModule {}
