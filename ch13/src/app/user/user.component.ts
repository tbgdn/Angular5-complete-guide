import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  constructor(private activeRoute: ActivatedRoute, private usersService: UserService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => this.id = +params.id
    );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }
}
