import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component' ;

const routes: Routes = [
  {path: '', redirectTo: 'Categories', pathMatch: 'full'},

  {path :'Categories',component:CategoriesComponent},
  {path:'Products/:catId',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
