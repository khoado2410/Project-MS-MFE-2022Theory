import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: 'home', mfName: 'mf-products'})
  }

  toShopDetail() {
    this.router.navigate(['product-detail'])
  }
}
