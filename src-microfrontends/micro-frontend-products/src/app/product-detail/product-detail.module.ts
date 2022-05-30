import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { NavbarHostComponent } from './navbar-host/navbar-host.component';
import { HeaderHostComponent } from './header-host/header-host.component';
import { FooterHostComponent } from './footer-host/footer-host.component';



@NgModule({
  declarations: [
    ProductDetailComponent,
    NavbarHostComponent,
    HeaderHostComponent,
    FooterHostComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
