import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Icategory} from 'src/app/interfaces/icategory';
import {CategoryService} from 'src/app/services/category.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 categoryList:Icategory[];
 categoryName: string;
  constructor(private _categoryService:CategoryService,private modalService:NgbModal
    ) {

    
    
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.categoryList=this._categoryService.getAllCategories();
   console.log(this.categoryList);
  }
  addCategory(){
    this._categoryService.addCategory(this.categoryName);
    this.getCategoryList();
    this.modalService.dismissAll();
  };

}
