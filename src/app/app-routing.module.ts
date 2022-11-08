import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartsComponent } from './components/carts/carts.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { FilteredProductListSubjectComponent } from './components/filtered-product-list-subject/filtered-product-list-subject.component';
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
import { EmployeeServiceModule } from './services/employee.service-module';
import { UserLoginComponentModule } from './components/user-login/user-login.component-module';
import { UserLoginServiceModule } from './services/user-login.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterFormServiceModule } from './services/register-form.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { CartsComponentModule } from './components/carts/carts.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserDetailsServiceModule } from './services/user-details.service-module';
import { JokesComponentModule } from './components/jokes/jokes.component-module';
import { JokesServiceModule } from './services/jokes.service-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesOgServiceModule } from './services/categories-og.service-module';
import { FilteredProductListSubjectComponentModule } from './components/filtered-product-list-subject/filtered-product-list-subject.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: '', component: HomePageComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'crypto-chips', component: CryptoChipsComponent },
      { path: 'holidays', component: HolidaysComponent },
      { path: 'checkbox', component: CheckboxCategoriesComponent },
      { path: 'categories-menu', component: MenuCategoriesComponent },
      { path: 'user-login', component: UserLoginComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'register-form', component: RegisterFormComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cat-facts', component: CatFactComponent },
      { path: 'age/:name', component: AgePredictionComponent },
      { path: 'cart/:id', component: CartsComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      { path: 'jokes', component: JokesComponent },
      { path: 'products/:category', component: FilteredProductListComponent },
      { path: 'subject-list', component: FilteredProductListSubjectComponent }
    ]),
    ProductListComponentModule,
    ProductServiceModule,
    HomePageComponentModule,
    CategoriesComponentModule,
    CategoriesServiceModule,
    CryptoChipsComponentModule,
    CryptoChipsServiceModule,
    HolidaysComponentModule,
    HolidaysServiceModule,
    CheckboxCategoriesComponentModule,
    MenuCategoriesComponentModule,
    EmployeeServiceModule,
    UserLoginComponentModule,
    UserLoginServiceModule,
    ProductFormComponentModule,
    RegisterFormComponentModule,
    RegisterFormServiceModule,
    EmployeeFormComponentModule,
    ProductDetailComponentModule,
    CatFactComponentModule,
    CatFactServiceModule,
    AgePredictionServiceModule,
    AgePredictionComponentModule,
    CartsComponentModule,
    CartServiceModule,
    UserDetailsComponentModule,
    UserDetailsServiceModule,
    JokesComponentModule,
    JokesServiceModule,
    FilteredProductListComponentModule,
    CategoriesOgServiceModule,
    FilteredProductListSubjectComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
