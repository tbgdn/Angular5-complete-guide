import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  constructor() {
  }

  ngOnInit() {
    const numberGenerator = interval(1000);
    this.subscriptions.push(numberGenerator.subscribe(
      (num: number) => console.log(num)
    ));

    const customObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        setTimeout(() => {
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.error('failed delivering the third package');
        }, 7000);
      }
    );
    this.subscriptions.push(customObservable.subscribe(
      (message: string) => console.log(message),
      (errorMessage: string) => console.error(errorMessage),
      () => console.log('delivery completed.')
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
