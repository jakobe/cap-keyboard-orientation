import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private orientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("hybrid")) {
        SplashScreen.hide();
        this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT_PRIMARY);
      }
    });
  }
}
