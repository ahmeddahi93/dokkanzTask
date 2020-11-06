
import { Iproduct } from 'src/app/interfaces/iproduct';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProdList: Iproduct[];
  constructor() {
    this.ProdList = [{ ID: 1, Name: 'Iphone7', Code: 100, Price: 5000, CategoryID: 1 },
    { ID: 2, Name: 'Iphone8', Code: 101, Price: 6000, CategoryID: 1 },
    { ID: 3, Name: 'Iphone7 Plus', Code: 102, Price: 7000, CategoryID: 1 },
    { ID: 4, Name: 'Iphone 11', Code: 103, Price: 10000, CategoryID: 1 },
    { ID: 5, Name: 'Huawei Mate 20 pro', Code: 104, Price: 10000, CategoryID: 1 },
    { ID: 6, Name: 'Oppo', Code: 105, Price: 9000, CategoryID: 1 },
    { ID: 20, Name: 'Huawei Mate 10', Code: 120, Price: 4000, CategoryID: 1 },
    { ID: 65, Name: 'iphone 6s', Code: 121, Price: 4500, CategoryID: 1 },
    { ID: 7, Name: 'Dell', Code: 106, Price: 11000, CategoryID: 2 },
    { ID: 8, Name: 'Hp', Code: 107, Price: 12000, CategoryID: 2 },
    { ID: 9, Name: 'Lenovo', Code: 109, Price: 13000, CategoryID: 2 },
    { ID: 10, Name: 'Fujetsu', Code: 110, Price: 9000, CategoryID: 2 },
    { ID: 11, Name: 'Sharp', Code: 111, Price: 5000, CategoryID: 3 },
    { ID: 12, Name: 'Fresh', Code: 112, Price: 6000, CategoryID: 3 },
    { ID: 13, Name: 'Toshepa', Code: 113, Price: 7000, CategoryID: 3 },
    { ID: 14, Name: 'Tornado', Code: 114, Price: 9000, CategoryID: 3 },
    { ID: 15, Name: 'Jumbo', Code: 115, Price: 12000, CategoryID: 3 }];
  }


  getProductsByCatID(catID): Iproduct[] {
    const products = this.ProdList.filter((prod) => prod.CategoryID == catID);
    return products && products.reverse();
  }

  addProduct(productI: { code: number, name: string, price: number }, CategoryID: number) {
    const existProduct = this.ProdList.find(product => product.Code === productI.code);
    if (!existProduct) {
      const newProduct: Iproduct = { CategoryID: CategoryID, Code: productI.code, Name: productI.name, Price: productI.price, ID: (this.ProdList[this.ProdList.length - 1].ID + 1) };
      this.ProdList.push(newProduct);
    }
    else {
      alert("Product is already exist");
    }
  }


  editProduct(productI: Iproduct) {
    const existProduct = this.ProdList.find(product => (product.Code == productI.Code && product.ID != productI.ID));
    console.log('existed product:', existProduct);
    if (existProduct) {
      alert('product with this Code already Existed');
      return;
    }
    const existProductIndex = this.ProdList.findIndex(product => product.ID === productI.ID);
    console.log('product index: ', existProductIndex);
    console.log('product to edit: ', productI);
    this.ProdList[existProductIndex] = productI;
  }

  deleteProduct = (product: Iproduct) => {
    this.ProdList = this.ProdList.filter(prod => prod.ID !== product.ID);
  }
}
