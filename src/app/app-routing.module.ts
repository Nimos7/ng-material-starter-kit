import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { MenuCategoriesComponentModule } from './components/menu-categories/menu-categories.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent },
    { path: '', component: HomePageComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'crypto-chips', component: CryptoChipsComponent },
    { path: 'holidays', component: HolidaysComponent },
    { path: 'checkbox', component: CheckboxCategoriesComponent },
    { path: 'categories-menu', component: MenuCategoriesComponent },
    { path: 'create-product', component: ProductFormComponent }]),
    ProductListComponentModule, ProductServiceModule, HomePageComponentModule, CategoriesComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule, HolidaysComponentModule, HolidaysServiceModule, CheckboxCategoriesComponentModule, MenuCategoriesComponentModule, ProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
