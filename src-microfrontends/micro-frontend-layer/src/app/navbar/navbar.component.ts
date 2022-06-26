import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  hasLogined: boolean = false;
  numberProducts: number = 0;
  ngOnInit(): void {
    const observable = new Observable('mf-authentication-sendToken');
    observable.subscribe(res => {
      if (res.token != null)
        this.hasLogined = true;
      else
        this.hasLogined = false;
    })
    var result = localStorage.getItem('accessToken');
    if (result)
      this.hasLogined = true;
    else
      this.hasLogined = false;
  }

  toHome() {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: 'home', mfName: 'mf-products'})
    this.router.navigate([''])
  }

  toSignIn() {
    this.router.navigate(['/authentication/sign-in'])
  }

  toSignUp() {
    this.router.navigate(['/authentication/sign-up'])
  }

  toAddProduct() {
    const observable2 = new Observable('mf-root-header');
    observable2.publish({nHeader: 'add product', mfName: 'mf-products'})
    this.router.navigate(['/add-product'])
  }

  toSignOut() {
    localStorage.removeItem('accessToken');
    const observable3 = new Observable('mf-authentication-sendToken');
    observable3.publish({token: null})
    this.router.navigate(['/authentication/sign-in']);
  }

}
