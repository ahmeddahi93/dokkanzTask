import { Icategory } from 'src/app/interfaces/icategory';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: Icategory[];
  constructor() {
    this.categoryList = [{ ID: 1, Name: "Mobiles"},
    { ID: 2, Name: 'Labtops'},
    { ID: 3, Name: 'Air Codetioners'},
    { ID: 4, Name: 'Perfums'},
    { ID: 5, Name: 'Glasses'},
    { ID: 6, Name: 'Clothes'},
    { ID: 7, Name: 'Screens'},
    { ID: 8, Name: 'Toys' }];
  }

  getAllCategories(): Icategory[] {
    return this.categoryList;
  }

  getCategoryByID(catId): Icategory {
    return this.categoryList.find((cat) => cat.ID == catId);
  }


  addCategory(name: string) {
    const existCategory = this.categoryList.find(category => category.Name === name);
    if (!existCategory) {
      const newCategory: Icategory = { Name: name, ID: (this.categoryList[this.categoryList.length - 1].ID + 1) };
      this.categoryList.push(newCategory);
    }
    else{
      alert("Category is already exist");
    }

  }
}
