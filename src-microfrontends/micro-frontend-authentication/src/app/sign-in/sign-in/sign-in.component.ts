import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  URL: string = environment.APIGATEWAY_ENDPOINT
  signInForm!: FormGroup
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient) {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get username() {
    return this.signInForm.get('username')?.value;
  }

  get password() {
    return this.signInForm.get('password')?.value;
  }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({ nHeader: '', mfName: 'mf-authentication' })
  }

  toSignUp() {
    this.router.navigate(['authentication/sign-up']);
  }

  invalid: boolean = false;
  signIn() {
    if (this.signInForm.invalid)
      return;
    this.http.post(this.URL + 'account/log-in', {
      username: this.username,
      password: this.password
    }).subscribe((res: any) => {
      if (res.ResponseResult.Result == null) {
        this.invalid = true;
        return;
      }
      else
        this.invalid = false;
      localStorage.setItem('accessToken', res.ResponseResult.Result.accessToken);
      const observable = new Observable('mf-authentication-sendToken');
      observable.publish({ token: res.ResponseResult.Result.accessToken })
      this.router.navigate(['']);
      //console.log(res.ResponseResult.Result.accessToken)
    })
  }

}
