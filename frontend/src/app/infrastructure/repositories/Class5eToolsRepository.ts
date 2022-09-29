import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ClassDto } from "../dtos/ClassDto";
import { map, Observable, zip } from "rxjs";
import { DndClassRepository } from "../../domain/repositories/DndClassRepository";
import { DndClass } from "../../domain/value_objects/DndClass";
import { DndClassMapper } from "../mappers/DndClassMapper";

@Injectable({
  providedIn: "root",
})
export class Class5eToolsRepository implements DndClassRepository {
  private static readonly VERSION: string = "master";
  private static readonly CLASS_URLS: string[] = [
    `https://raw.githubusercontent.com/5etools-mirror-1/5etools-mirror-1.github.io/${Class5eToolsRepository.VERSION}/data/class/class-cleric.json`,
    `https://raw.githubusercontent.com/5etools-mirror-1/5etools-mirror-1.github.io/${Class5eToolsRepository.VERSION}/data/class/class-fighter.json`,
  ];

  constructor(private httpClient: HttpClient, private dndClassMapper: DndClassMapper) {}

  private getClassDto(classUrl: string): Observable<ClassDto> {
    return this.httpClient.get<ClassDto>(classUrl);
  }

  getDndClasses(): Observable<DndClass[]> {
    return zip(
      this.getClassDto(Class5eToolsRepository.CLASS_URLS[0]),
      this.getClassDto(Class5eToolsRepository.CLASS_URLS[1])
    ).pipe(map(classDtos => classDtos.map(this.dndClassMapper.map)));
  }
}
