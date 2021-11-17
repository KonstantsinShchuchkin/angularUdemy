import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      .fifthLog {
        color: white;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  // allowNewServer: boolean = false;
  // isCreated: boolean = false;
  // serverCreationStatus: string = 'No new server was created!';
  // serverName: string = 'Test';
  // username: string = '';
  // servers: string[] = ['testServer', 'anotherTestServer'];
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000);
  // }
  // ngOnInit(): void {}
  // onCreateServer() {
  //   this.isCreated = true;
  //   this.servers.push(this.serverName);
  //   this.serverCreationStatus = `New server was created! ${this.serverName}`;
  // }
  // onUpdateServerName(event: Event) {
  //   console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
  // onUpdateUsername() {
  //   this.username = '';
  // }
  isToggled: boolean = false;
  buttonLogs: string[] = [];

  ngOnInit(): void {}

  constructor() {}

  onDisplayDetails() {
    this.isToggled = !this.isToggled;
    this.buttonLogs.push(`Button is clicked at ${new Date()}`);
  }

  getColor() {
    return this.isToggled ? '' : 'white';
  }

  getLogColor() {
    return this.buttonLogs.length > 4 ? 'blue' : '';
  }
}
