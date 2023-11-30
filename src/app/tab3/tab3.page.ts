import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  name: any;
  email: any;
  message: any;
  constructor() {}
  submitForm() {
    // You can implement logic to send the user's message here
    // For example, use an HTTP request to send the data to a server or an email service.
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
  }

}
