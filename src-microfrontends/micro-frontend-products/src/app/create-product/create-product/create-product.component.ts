import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  URL: string = 'http://localhost:3333/'
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  productForm!: FormGroup;
  listBranches: any[] = [];
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nameProduct: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      category: [''],
      branchName: [''],
      images: this.formBuilder.array([this.formBuilder.control('')])
    })
    this.productForm?.get('category')?.disable();
    this.http.get(this.URL + 'category/get-all-branch').subscribe(x => {
      this.listBranches.push(x);
      console.log(x);
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
    return this.productForm?.get('images') as FormArray;
  }

  get branchName() {
    return this.productForm?.get('branchName');
  }

  addProduct() {
    if (this.productForm?.invalid){
      return;
    }
    console.log(this.productForm?.get('nameProduct')?.value)
    console.log(this.productForm?.get('description')?.value)
    console.log(this.productForm?.get('quantity')?.value)
    console.log(this.productForm?.get('price')?.value)
    console.log(this.productForm?.get('category')?.value)
    this.images.value.filter((img: any, index: any) => {
      if (img == '')
        this.images.removeAt(index);
    })
    console.log(this.productForm?.get('images')?.value)
    console.log(this.images.value)
  }

  changeQuantity() {
    if (this.productForm?.get('quantity')?.value < 0)
      this.productForm?.get('quantity')?.setValue(0);
  }

  changePrice() {
    if (this.productForm?.get('price')?.value < 0)
      this.productForm?.get('price')?.setValue(0);
  }

  isNotChanged: boolean = true
  onBranchChange() {
    if (this.productForm?.get('branchName')?.value == 0)
      this.productForm?.get('category')?.disable();
    else
      this.productForm?.get('category')?.enable();
  }

  openFile(i: any) {
    document.getElementById('fileInput' + i)?.setAttribute('accept', 'image/*');
    document.getElementById('fileInput' + i)?.click();
  }

  readURL(input: any) {
    console.log(input);
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var id = input.target?.id.split('fileInput')[1];
        document.getElementById('output' + id)?.setAttribute('src', e.target?.result as string);
      };
  
      reader.readAsDataURL(input.target.files[0]);
    }
  }

  addMoreImages() {
    if (this.images.value[this.images.length - 1] == '')
      return;
    this.images.push(this.formBuilder.control(['']));
  }
}
