export enum Tone {
  Tone0 = "0",
  Tone50 = "50",
  Tone100 = "100",
  Tone200 = "200",
  Tone250 = "250",
  Tone300 = "300",
  Tone400 = "400",
  Tone500 = "500",
  Tone600 = "600",
  Tone700 = "700",
  Tone800 = "800",
  Tone900 = "900",
  Tone1000 = "1000",
}

export class CustomColors {
  static primary(tone: Tone, transparency: number = 1): string {
    return CustomColors.getCssColorVariable("--cm-primary-palette-" + tone.toString(), transparency);
  }

  static accent(tone: Tone, transparency: number = 1): string {
    return CustomColors.getCssColorVariable("--cm-accent-palette-" + tone.toString(), transparency);
  }

  static grayscale(tone: Tone, transparency: number = 1): string {
    return CustomColors.getCssColorVariable("--cm-grayscale-" + tone.toString(), transparency);
  }

  private static getCssColorVariable(variableName: string, transparency: number): string {
    // In Some environments (e.g. Chrome) the result of the CSS variable can have spaces.
    let color = window.getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    if (transparency === 1) {
      return color;
    }

    if (color.length === 4) {
      // Angular minifies colors like #RRGGBB at runtime to #RGB, so we have to restore them.
      color = "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
    }

    const transparencyHex = Math.min(255, Math.ceil(transparency * 255)).toString(16);
    if (transparencyHex.length === 1) {
      return color + "0" + transparencyHex;
    }
    return color + transparencyHex;
  }
}
