export class Device {
  public static isMobileDevice(): boolean {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
      "ontouchstart" in window
    );
  }

  public static isIosDevice(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) && "ontouchstart" in window;
  }
}
