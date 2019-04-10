import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  constructor() { }

  ngOnInit() {
    this.user = {
      id: 1,
      name: '_NAME_'
    };
  }

}
