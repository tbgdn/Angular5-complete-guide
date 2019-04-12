import {Component, OnInit} from '@angular/core';
import {ServersService} from '../servers.service';
import {ActivatedRoute, Data, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activeRoute.data.subscribe(
      (data: Data) => this.server = data.server
    );
    /*this.activeRoute.params.subscribe(
      (params) => this.server = this.serversService.getServer(+params.id)
    );*/
  }

  onReload() {
  }

  onServerEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.activeRoute,
      queryParamsHandling: 'preserve'
    });
  }

}
