import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
/*    template: `<h3>hai server component</h3>`,*/
    styles: [`
    .online{
      color: white;
    }
    `]
})
export class ServerComponent {
  serverId = 'test server';
  serverStatus = 'online';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
