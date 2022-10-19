import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'producs', component: ProductListComponent },
    { path: '', component: HomePageComponent }]),
    ProductListComponentModule, ProductServiceModule, HomePageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
