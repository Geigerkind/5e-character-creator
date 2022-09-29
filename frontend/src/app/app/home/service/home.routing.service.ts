import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class HomeRoutingService {
  static readonly URL_HOME: string = "";

  constructor(private router: Router) {}

  toHome(): Promise<boolean> {
    return this.router.navigateByUrl(HomeRoutingService.URL_HOME);
  }
}
