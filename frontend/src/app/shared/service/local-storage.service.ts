import { Injectable } from "@angular/core";
import { LocalStorageKey } from "src/app/shared/value-object/local-storage-key";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  store<T extends LocalStorageKey>(key: T, data: any): void {
    const jsonData = JSON.stringify(data);
    window.localStorage.setItem(key.toString(), jsonData);
  }

  retrieve<T extends LocalStorageKey>(key: T): any {
    return window.localStorage.getItem(key.toString());
  }

  remove<T extends LocalStorageKey>(key: T): void {
    window.localStorage.removeItem(key.toString());
  }
}
