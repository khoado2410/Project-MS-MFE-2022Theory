import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'micro-frontend-root';
/*   webComponentsByRoute = {
    '/': 'micro-frontend-products',
    '/product-detail': 'micro-frontend-product-detail'
  }; */
}
