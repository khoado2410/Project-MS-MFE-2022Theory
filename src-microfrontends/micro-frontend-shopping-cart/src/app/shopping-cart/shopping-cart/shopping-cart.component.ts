import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'windowed-observable'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  URL = environment.APIGATEWAY_ENDPOINT;
  token: string = "";
  listProducts: any;
  idCart!: number;
  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({ nHeader: 'Shopping-Cart', mfName: 'mf-shopping-cart' })
    this.token = localStorage.getItem('accessToken') ?? ""
    var header = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
    this.http.get(this.URL + "inventory-cart-ms/get-cart", { headers: header }).subscribe((res: any) => {
      this.listProducts = res.Result.listItem;
      this.idCart = res.Result.idCart;
      this.listProducts.map((x: any) => {
        x['isChange'] = false
        x['defaultQuantity'] = +x.quantityCart;
        if (x.discount) {
          x['priceDiscount'] = +x.price - (+x.price * +x.discount / 100);
          x['totalPrice'] = x['priceDiscount'] * +x.quantityCart;
        }
        else {
          x['totalPrice'] = +x.price * +x.quantityCart;
        }
      })
      this.subTotal = this.countSubTotal();
    })
    this.shipCost = this.getRndInteger(10, 20);
    localStorage.setItem('shipCost', this.shipCost.toString());
  }

  shipCost!: number;
  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  toCheckOut() {
    this.router.navigate(['/checkout'])
  }

  onSave(product: any) {
    var header = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
    this.http.post(this.URL + "inventory-cart-ms/create-cart", {
      'id_product': product.id,
      'amount': product.quantityCart,
      'is_update': 1
    }, { headers: header }).subscribe((res: any) => {
      if (res.ErrorCode == 0) {
        product['isChange'] = false;
        this.http.get(this.URL + "inventory-cart-ms/get-cart", { headers: header }).subscribe((res: any) => {
          this.listProducts = res.Result.listItem;
          this.idCart = res.Result.idCart;
          this.listProducts.map((x: any) => {
            x['isChange'] = false
            x['defaultQuantity'] = +x.quantityCart;
            if (x.discount) {
              x['priceDiscount'] = +x.price - (+x.price * +x.discount / 100);
              x['totalPrice'] = x['priceDiscount'] * +x.quantityCart;
            }
            else {
              x['totalPrice'] = +x.price * +x.quantityCart;
            }
          })
          this.subTotal = this.countSubTotal();
        })
      }
    })
  }

  subTotal!: number;
  countSubTotal() {
    let total = 0;
    this.listProducts.forEach((x: any) => {
      total += x['totalPrice'];
    })
    return total;
  }

  safeUrl(link: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://' + link);
  }

  onDelete(idProduct: string, idCart: number) {
    var product = this.listProducts.find((x: any) => x.id == idProduct);
    this.listProducts = this.listProducts.filter((x: any) => x != product);
    var header = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
    this.http.post(this.URL + 'inventory-cart-ms/remove-item', {
      id_product: idProduct,
      id_cart: idCart
    }, { headers: header }).subscribe(() => {
      var obs = new Observable('mf-products-get-number-products-in-cart');
      obs.publish({'numberProducts': this.listProducts.length});
      this.http.get(this.URL + "inventory-cart-ms/get-cart", { headers: header }).subscribe((res: any) => {
        this.listProducts = res.Result.listItem;
        this.idCart = res.Result.idCart;
        this.listProducts.map((x: any) => {
          x['isChange'] = false
          x['defaultQuantity'] = +x.quantityCart;
          if (x.discount) {
            x['priceDiscount'] = +x.price - (+x.price * +x.discount / 100);
            x['totalPrice'] = x['priceDiscount'] * +x.quantityCart;
          }
          else {
            x['totalPrice'] = +x.price * +x.quantityCart;
          }
        })
        this.subTotal = this.countSubTotal();
      })
    });
  }
}
