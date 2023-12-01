import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

openPage(arg0: string) {

  this.menu.close(); // Close the menu
  // Add navigation logic here
  // For example, navigate to the selected page
}
constructor(private menu: MenuController) {}

}
