import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prodList: Iproduct[];
  sub: any;
  id: number;
  pageSize = 6;
  collectionSize: number;
  page = 1;

  constructor(private _productService: ProductService,
    private route: ActivatedRoute, private modalService: NgbModal
  ) {

  }


  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['catId']; // (+) converts string 'id' to a number
      console.log(params);
      this.getProducts();
      // In a real app: dispatch action to load the details here.
    });

  }

  getProducts = () => {

    this.prodList = this._productService.getProductsByCatID(this.id);
  }



  showAddProductComponent = () => {
    const addProductModal = this.modalService.open(AddEditProductComponent);
    addProductModal.result.then(product => {
      console.log('after clode modal');
      this._productService.addProduct(product, this.id);
      this.getProducts();
    });
  }

  showEditProductComponent = (product: Iproduct) => {
    const editProductModal = this.modalService.open(AddEditProductComponent);
    editProductModal.componentInstance.product = product;
    editProductModal.result.then(product => {
      console.log('after clode modal');
      this._productService.editProduct(product);
      this.getProducts();
    });
  }

  deleteProduct = (product: Iproduct) => {
    this._productService.deleteProduct(product);
    this.getProducts();
  }

}
