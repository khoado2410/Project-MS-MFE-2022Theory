import { HttpClient } from '@angular/common/http';
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

  URL: string = "http://localhost:3333/"
  signUpForm!: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient) {
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
    if (this.signUpForm.invalid)
      return;
    this.http.post(this.URL + 'account/create-user', {
      fullname: this.fullname,
      age: this.age,
      username: this.username,
      password: this.password,
      role: 'admin'
    } as SignUpRequestDto).subscribe(() => {
      alert('Sign up succesfully');
      this.router.navigate(['/authentication/sign-in']);
    })
  }
}

export interface SignUpRequestDto {
  fullname: string,
  age: number,
  username: string,
  password: string,
  role: string
}