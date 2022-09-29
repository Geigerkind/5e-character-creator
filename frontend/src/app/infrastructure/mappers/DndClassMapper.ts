import { Injectable } from "@angular/core";
import { Mapper } from "./Mapper";
import { ClassDto } from "../dtos/ClassDto";
import { DndClass } from "../../domain/value_objects/DndClass";

@Injectable({
  providedIn: "root",
})
export class DndClassMapper implements Mapper<ClassDto, DndClass> {
  map(from: ClassDto): DndClass {
    return {
      name: from.class[0].name,
    };
  }
}
