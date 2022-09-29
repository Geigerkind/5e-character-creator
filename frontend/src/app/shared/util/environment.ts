export class Environment {
  private static retrieveEnvironmentValue(key: string): boolean {
    // @ts-ignore
    return window.__env[key];
  }
}
