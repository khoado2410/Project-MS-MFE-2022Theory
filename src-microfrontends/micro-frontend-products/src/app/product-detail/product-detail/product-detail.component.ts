import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'windowed-observable'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId!: number
  URL: string = 'http://localhost:3333/'
  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.activatedRoute.params.subscribe(res => {
      this.productId = res['id'];
    })
  }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({ nHeader: 'product-detail', mfName: 'mf-products' })
    //this.http.get('')
  }

}
