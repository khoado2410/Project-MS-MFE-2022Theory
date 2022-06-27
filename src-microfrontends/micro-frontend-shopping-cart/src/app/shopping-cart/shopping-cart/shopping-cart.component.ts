import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  URL = "http://localhost:3333/"
  token: string = "";
  listProducts: any
  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: 'Shopping-Cart', mfName: 'mf-shopping-cart'})
    this.token = localStorage.getItem('accessToken') ?? ""
    var header = new Headers({
      "Authorization": "Bearer " + this.token
    })
    this.http.get(this.URL + "inventory-cart-ms?get-cart?id_customer=2").subscribe((res: any) => {
      this.listProducts = res;
    })
  }

}
