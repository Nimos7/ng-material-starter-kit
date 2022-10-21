import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent },
    { path: '', component: HomePageComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'crypto-chips', component: CryptoChipsComponent },
    { path: 'holidays', component: HolidaysComponent }]), ProductListComponentModule, ProductServiceModule, HomePageComponentModule, CategoriesComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule, HolidaysComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
