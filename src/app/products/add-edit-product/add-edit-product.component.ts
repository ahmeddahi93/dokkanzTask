import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  @Input('product') product: Iproduct;
  productForm: FormGroup;
  submitted: boolean;
  constructor(private productsSevice: ProductService,
    private fb: FormBuilder, private activeModal: NgbActiveModal) {
    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    if (this.product) {
      this.productForm.patchValue(
        {
          name: this.product.Name,
          code: this.product.Code,
          price: this.product.Price
        });
    }
  }

  addProduct = () => {
    this.submitted = true;
    if (this.productForm.valid) {
      this.activeModal.close(this.productForm.value);
    }
  }

  editProduct = () => {
    this.submitted = true;
    if (this.productForm.valid) {
      this.activeModal.close({
        Name: this.productForm.value.name,
        Code: this.productForm.value.code,
        Price: this.productForm.value.price,
        ID: this.product.ID,
        CategoryID: this.product.CategoryID
      });
    }
  }

  get code(): AbstractControl {
    return this.productForm.get('code');
  }

  get name(): AbstractControl {
    return this.productForm.get('name');
  }

  get price(): AbstractControl {
    return this.productForm.get('price');
  }

}
