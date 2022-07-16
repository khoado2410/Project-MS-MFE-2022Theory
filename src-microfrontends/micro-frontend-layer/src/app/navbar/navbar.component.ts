import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient) { }

  hasLogined: boolean = false;
  numberProducts: number = 0;
  token: string = ""
  URL: string = "http://localhost:3333/"
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
    this.token = localStorage.getItem('accessToken') ?? ""
    var header = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
    this.http.get(this.URL + "inventory-cart-ms/get-cart", { headers: header }).subscribe((res: any) => {
      var observable = new Observable('mf-products-get-number-products-in-cart');
      if (res.ErrorCode != 0) {
        observable.publish({ 'numberProducts': 0 });
        return;
      }
      observable.publish({ 'numberProducts': res.Result.listItem.length });
    })
    const obs = new Observable('mf-products-add-to-cart');
    obs.subscribe((res: any) => {
      this.numberProducts += 1;
    })
    const obs2 = new Observable('mf-products-get-number-products-in-cart');
    obs2.subscribe((res: any) => {
      this.numberProducts = res.numberProducts;
    })
  }

  toHome() {
    const observable = new Observable('mf-root-header');
    observable.publish({ nHeader: 'home', mfName: 'mf-products' })
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
    observable2.publish({ nHeader: 'add product', mfName: 'mf-products' })
    this.router.navigate(['/add-product'])
  }

  toSignOut() {
    localStorage.removeItem('accessToken');
    const observable3 = new Observable('mf-authentication-sendToken');
    observable3.publish({ token: null })
    this.router.navigate(['/authentication/sign-in']);
  }

  toCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
