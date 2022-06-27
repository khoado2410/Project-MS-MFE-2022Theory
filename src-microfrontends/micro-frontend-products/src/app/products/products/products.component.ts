import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  URL: string = "http://localhost:3333/"
  constructor(private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  listProducts: any[] = []
  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: 'home', mfName: 'mf-products'});
    var token = localStorage.getItem('accessToken');
    const obs = new Observable('mf-authentication-sendToken');
    obs.subscribe(res => {
      let aToken = res.token;
      if (aToken != token)
        token = aToken;
    })
    var header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    this.http.get(this.URL + 'product/get-all-product', { headers: header }).subscribe((res: any) => {
      console.log(res)
      this.listProducts = res.ResponseResult.Result;
    })
  }

  safeUrl(value: string) {
    return this.sanitizer.bypassSecurityTrustUrl('http://' + value);
  }

  toShopDetail() {
    this.router.navigate(['product-detail'])
  }
}
