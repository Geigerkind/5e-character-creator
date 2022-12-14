import { NgModule } from "@angular/core";

import { AppRoutingModule } from "src/app/app/app-routing.module";
import { AppComponent } from "src/app/app/smart-component/app/app.component";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { DomainModule } from "../domain/domain.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    InfrastructureModule,
    DomainModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpClient => new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json"),
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
