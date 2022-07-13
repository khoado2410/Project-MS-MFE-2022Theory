import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    var header = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
    this.http.get(this.URL + "inventory-cart-ms/get-cart", { headers: header }).subscribe((res: any) => {
      this.listProducts = res.Result.listItem;
      this.listProducts.map((x: any) => {
        x['isChange'] = false
        x['defaultQuantity'] = x.quantityCart;
      })
    })
  }

  onChangeQuantityPlus(product: any) {
    product.quantityCart += 1;
    if (product.quantityCart == product['defaultQuantity'])
      product['isChange'] = false;
    else
      product['isChange'] = true;
  }

  onChangeQuantityMinus(product: any) {
    product.quantityCart -= 1;
    if (product.quantityCart == product['defaultQuantity'])
      product['isChange'] = false;
    else
      product['isChange'] = true;
  }
}
