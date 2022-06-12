import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  URL: string = 'http://localhost:3333/'
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  productForm!: FormGroup;
  listBranches: BranchDto[] = [];
  listCategories: any[] = [];
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nameProduct: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      branchName: ['', Validators.required],
      images: this.formBuilder.array([this.formBuilder.control('')])
    })
    this.productForm?.get('category')?.disable();
    this.branchName?.setValue(0);
    this.category?.setValue(0);
    this.http.get(this.URL + 'category/get-all-branch').subscribe((x: any) => {
      x.ResponseResult.Result.map((y: any) => {
        this.listBranches.push({
          branchName: y.name,
          listCategories: y.category
        })
      })
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

    if (this.branchName?.value == 0 || this.category?.value == 0)
      return;
    
    if (this.images.value[0] == '')
      return;

    this.listFiles.forEach((file: any, index: any) => {
      this.images.value[index] = file
    })
    
    var formData = new FormData();
    formData.append('name', this.nameProduct?.value);
    formData.append('description', this.description?.value);
    formData.append('price', this.price?.value);
    formData.append('amount', this.quantity?.value);
    formData.append('branch', this.branchName?.value);
    formData.append('category', this.category?.value);
    this.listFiles.forEach(file => {
      formData.append('listImage', file, file.name)
    })

    this.http.post(this.URL + 'product/create-product', formData).subscribe((res: any) => {
      if (res.ResponseResult.ErrorCode != 0) {
        alert(res.ResponseResult.Message);
        return
      }
      this.router.navigate(['']);
    })
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
    if (this.productForm?.get('branchName')?.value == 0) {
      this.productForm?.get('category')?.disable();
      this.category?.setValue(0);
    }
    else {
      this.productForm?.get('category')?.enable();
      this.listCategories = this.listBranches.find(x => x.branchName == this.branchName?.value)?.listCategories ?? [];
    }
  }

  openFile(i: any) {
    document.getElementById('fileInput' + i)?.setAttribute('accept', 'image/*');
    document.getElementById('fileInput' + i)?.click();
  }

  listFiles: File[] = []
  readURL(input: any) {
    console.log(input);
    var index = +input.target?.id.split('fileInput')[1];
    if (input.target.files && input.target.files[0]) {
      this.listFiles[index] = input.target.files[0];
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

export interface BranchDto {
  branchName: string,
  listCategories: any[]
}