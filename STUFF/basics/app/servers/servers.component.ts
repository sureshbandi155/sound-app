import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'no server was created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['b' , 'hello', 'hellllo', 'a', 'b' , 'c'];
  constructor() {
    setTimeout( () => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return this.serverCreationStatus = 'server was created '  + this.serverName;
  }
/*  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target.value);
  }*/

}
