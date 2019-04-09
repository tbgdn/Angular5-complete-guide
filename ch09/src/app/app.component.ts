import {Component, OnInit} from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ch09';
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountsService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
