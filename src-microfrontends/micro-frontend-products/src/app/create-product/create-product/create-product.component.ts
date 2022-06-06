import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  productForm!: FormGroup;
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nameProduct: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      category: [''],
      images: ['']
    })
  }

  get nameProduct() {
    return this.productForm?.get('nameProduct');
  }

  get description() {
    return this.productForm?.get('description');
  }

  get quantity() {
    return this.productForm?.get('quantity');
  }

  get price() {
    return this.productForm?.get('price');
  }

  get category() {
    return this.productForm?.get('category');
  }

  get images() {
    return this.productForm?.get('images');
  }

  addProduct() {
    console.log(this.productForm?.get('nameProduct')?.value)
    console.log(this.productForm?.get('description')?.value)
    console.log(this.productForm?.get('quantity')?.value)
    console.log(this.productForm?.get('price')?.value)
    console.log(this.productForm?.get('category')?.value)
  }

  changeQuantity() {
    if (this.productForm?.get('quantity')?.value < 0)
    this.productForm?.get('quantity')?.setValue(0);
  }
}
