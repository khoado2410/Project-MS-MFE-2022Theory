import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      age: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  get fullname() {
    return this.signUpForm.get('fullname')?.value;
  }

  get age() {
    return this.signUpForm.get('age')?.value;
  }

  get username() {
    return this.signUpForm.get('username')?.value;
  }

  get password() {
    return this.signUpForm.get('password')?.value;
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')?.value;
  }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({ nHeader: '', mfName: 'mf-authentication' })
  }

  toSignIn() {
    this.router.navigate(['authentication/sign-in']);
  }

  isMatchPass: boolean = true;
  signUp() {
    if (!this.password.invalid && !this.confirmPassword.invalid && this.password != this.confirmPassword) {
      this.isMatchPass = false;
      return;
    }
    console.log(this.fullname);
    console.log(this.age);
    console.log(this.username);
    console.log(this.password);
  }
}
