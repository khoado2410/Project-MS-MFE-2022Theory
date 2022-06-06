import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateProductRoutingModule } from './create-product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateProductModule { }
