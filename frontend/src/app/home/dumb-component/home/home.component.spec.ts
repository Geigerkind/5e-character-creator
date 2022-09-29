import { MockBuilder, MockedComponentFixture, MockRender } from "ng-mocks";
import { HomeComponent } from "src/app/home/dumb-component/home/home.component";
import { HomeModule } from "src/app/home/home.module";

describe(HomeComponent.name, () => {
  let component: HomeComponent;
  let fixture: MockedComponentFixture<HomeComponent>;

  beforeEach(() => {
    return MockBuilder(HomeComponent, HomeModule);
  });

  beforeEach(() => {
    fixture = MockRender(HomeComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
