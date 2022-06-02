import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: '', mfName: 'mf-authentication'})
  }

  toSignUp() {
    this.router.navigate(['authentication/sign-up']);
  }

}
