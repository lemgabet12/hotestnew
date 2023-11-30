import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private menu: MenuController) {}
  openPage(page: string) {
    this.menu.close(); // Close the menu
    // Add navigation logic here
    // For example, navigate to the selected page
  }

}
