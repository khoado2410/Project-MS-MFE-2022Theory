import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'product-detail', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'add-product', loadChildren: () => import('./create-product/create-product.module').then(m => m.CreateProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
