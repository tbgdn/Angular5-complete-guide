import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {reject} from 'q';
import set = Reflect.set;

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent implements OnInit {
  private genders = ['male', 'female'];
  private signupForm: FormGroup;
  private forbiddenUsername = ['Chris', 'Anna'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
    this.signupForm.setValue({
      userData: {
        username: 'Max',
        email: 'no-email@max.net'
      },
      gender: 'male',
      hobbies: []
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    } else {
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
