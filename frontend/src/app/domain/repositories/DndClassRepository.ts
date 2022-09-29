import { DndClass } from "../value_objects/DndClass";
import { Observable } from "rxjs";

export abstract class DndClassRepository {
  abstract getDndClasses(): Observable<DndClass[]>;
}
