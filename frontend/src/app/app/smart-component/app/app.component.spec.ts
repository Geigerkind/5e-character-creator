import { AppComponent } from "./app.component";
import { MockBuilder, MockedComponentFixture, MockRender } from "ng-mocks";
import { AppModule } from "src/app/app/app.module";

describe(AppComponent.name, () => {
  let component: AppComponent;
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(() => {
    return MockBuilder(AppComponent, AppModule);
  });

  beforeEach(() => {
    fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });
});
