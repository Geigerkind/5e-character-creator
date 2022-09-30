import { MockBuilder, MockedComponentFixture, MockRender } from "ng-mocks";
import { CreatorModule } from "src/app/app/creator/creator.module";
import { CreatorComponent } from "./creator.component";

describe(CreatorComponent.name, () => {
  let component: CreatorComponent;
  let fixture: MockedComponentFixture<CreatorComponent>;

  beforeEach(() => {
    return MockBuilder(CreatorComponent, CreatorModule);
  });

  beforeEach(() => {
    fixture = MockRender(CreatorComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
