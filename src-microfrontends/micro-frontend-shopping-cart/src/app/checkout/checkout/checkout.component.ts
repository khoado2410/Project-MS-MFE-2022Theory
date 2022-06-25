import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({ nHeader: 'Checkout', mfName: 'mf-shopping-cart'});
  }

}
