import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: '', mfName: 'mf-authentication'})
  }

  toSignIn() {
    this.router.navigate(['authentication/sign-in']);
  }
}
