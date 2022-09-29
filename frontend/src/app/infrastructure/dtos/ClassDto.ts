import {HealthDiceDto} from "./HealthDiceDto";
import {AttributeDto} from "./AttributeDto";

export interface ClassDto {
  class: {
    name: string;
    source: string;
    page: number;
    isReprinted: boolean;
    hd: HealthDiceDto;
    proficiency: AttributeDto[];
    spellcastingAbility: AttributeDto;
    casterProgression: string;
    spellsKnownProgression: number[];
  }[];
}
