import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  servers = ['DEV server', 'QA server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created: ' + this.serverName;
  }

  onServerNameUpdate(event) {
    this.serverName = event.target.value;
  }

}
