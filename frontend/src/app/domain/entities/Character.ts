import { CharacterClass } from "../value_objects/CharacterClass";

export class Character {
  characterClasses: CharacterClass[];

  constructor(private name: string) {}

  getLevel(): number {
    return this.characterClasses.reduce((acc, it) => acc + it.level, 0);
  }
}
