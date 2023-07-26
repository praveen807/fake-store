import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

const routes: Routes = [
  {path : 'create' ,  component : CreateProductComponent},
  {path : 'display' , component : ProductDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
