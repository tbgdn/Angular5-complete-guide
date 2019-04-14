import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  @ViewChild('signupForm') formElement: NgForm;
  private defaultSecretQuestion = 'pet';
  private questionAnswer: string;
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  constructor() { }

  suggestName() {
    const suggestedUsername = 'SuperUser';
    /*this.formElement.setValue({
      userData: {
        username: suggestedUsername,
        email: ''
      },
      secretQuestion: 'pet',
      questionAnswer: '',
      gender: 'male'
    });*/
    this.formElement.form.patchValue({
      userData: {
        username: suggestedUsername
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.formElement.value.userData.username;
    this.user.email = this.formElement.value.userData.email;
    this.user.question = this.formElement.value.secretQuestion;
    this.user.answer = this.formElement.value.questionAnswer;
    this.user.gender = this.formElement.value.gender;
    this.formElement.form.reset();
  }
}
