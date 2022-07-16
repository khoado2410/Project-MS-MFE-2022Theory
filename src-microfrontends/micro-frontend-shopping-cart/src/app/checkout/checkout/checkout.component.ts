import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  URL: string = environment.APIGATEWAY_ENDPOINT;
  constructor(private http: HttpClient,
    private router: Router) { }

  listProducts!: any[];
  subTotal!: number;
  token!: string;
  shipCost: any;
  firstName: any;
  lastName: string = "";
  email: string = "";
  address_line_1: string = "";
  address_line_2: string = "";
  mobile: string = "";
  payment: any;

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({ nHeader: 'Checkout', mfName: 'mf-shopping-cart' });
    this.token = localStorage.getItem('accessToken') ?? ""
    var header = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
    this.http.get(this.URL + "inventory-cart-ms/get-cart", { headers: header }).subscribe((res: any) => {
      this.listProducts = res.Result.listItem;
      this.listProducts.forEach((x: any) => {
        x['isChange'] = false
        x['defaultQuantity'] = +x.quantityCart;
        if (x.discount) {
          x['priceDiscount'] = +x.price - (+x.price * +x.discount / 100);
          x['totalPrice'] = +x['priceDiscount'] * +x.quantityCart;
        }
        else {
          x['totalPrice'] = +x.price * +x.quantityCart;
        }
      })
      this.subTotal = this.countSubTotal();
      if (localStorage.getItem('shipCost') != null)
        this.shipCost = localStorage.getItem('shipCost');
      else
        this.shipCost = 0;
      this.shipCost = +this.shipCost;
    })
  }

  countSubTotal() {
    let total = 0;
    this.listProducts.forEach((x: any) => {
      total += x['totalPrice'];
    })
    return total;
  }

  toCreate() {
    var header = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
      'Content-Type': 'application/json'
    })
    this.http.post(this.URL + 'payment/create-bill', {
      'first_name': this.firstName,
      'last_name': this.lastName,
      'email': this.email,
      'mobile_no': this.mobile,
      'address_line_1': this.address_line_1,
      'address_line_2': this.address_line_2,
      'total': this.subTotal + this.shipCost,
      'payment': this.payment,
      'list_item': this.listProducts
    }, { headers: header }).subscribe((res: any) => {
      if (res.ResponseResult.ErrorCode == 0) {
        alert('Create Bill Success Fully');
        var obs = new Observable('mf-products-get-number-products-in-cart');
        obs.publish({ 'numberProducts': 0 });
        this.router.navigate(['']);
      }
    })
  }
}
