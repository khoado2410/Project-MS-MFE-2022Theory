import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: 'Shopping-Cart', mfName: 'mf-shopping-cart'})
  }

}
