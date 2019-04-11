import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params.id,
          name: params.name
        };
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
