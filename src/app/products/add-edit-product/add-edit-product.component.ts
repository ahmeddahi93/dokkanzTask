import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productsSevice: ProductService,
    private fb: FormBuilder, private activeModal: NgbActiveModal) {
    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  addProduct = () => {
    if (this.productForm.valid) {
      this.activeModal.close(this.productForm.value);
    }
  }

}
