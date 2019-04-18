import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { AppProductRoutingModule } from './app-product-routing.module';
import { PorductsIntroComponent } from '../porducts-intro/porducts-intro.component';

@NgModule({
  declarations: [
    ProductsComponent,
    PorductsIntroComponent
  ],
  imports: [
    CommonModule,
    AppProductRoutingModule
    
  ],
  exports: [
    AppProductRoutingModule,
    ProductsComponent,
    PorductsIntroComponent
  ]
})
export class AppProductModule { }
