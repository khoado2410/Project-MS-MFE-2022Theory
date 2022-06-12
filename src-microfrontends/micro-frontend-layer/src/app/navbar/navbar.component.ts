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
  ngOnInit(): void {
    const observable = new Observable('mf-authentication-sendToken');
    observable.subscribe(res => {
      if (res.token != null)
        this.hasLogined = true;
    })
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
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: 'add product', mfName: 'mf-products'})
    this.router.navigate(['/add-product'])
  }

}
