import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        background-color: black;
        color: white !important;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'online';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : ' offline';
  }

  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
