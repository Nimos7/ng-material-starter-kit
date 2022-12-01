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
import { SortedListComponent } from './components/sorted-list/sorted-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RefreshEmployeesListComponent } from './components/refresh-employees-list/refresh-employees-list.component';
import { ProductMasterListComponent } from './components/product-master-list/product-master-list.component';
import { EmployeesMasterDetailsComponent } from './components/employees-master-details/employees-master-details.component';
import { CryptoMasterDetailsComponent } from './components/crypto-master-details/crypto-master-details.component';
import { DetailsTestComponent } from './components/details-test/details-test.component';
import { DetailsDetailsComponent } from './components/details-details/details-details.component';
import { AdvancedListComponent } from './components/advanced-list/advanced-list.component';
import { ProductsEmptyStateComponent } from './components/products-empty-state/products-empty-state.component';
import { CreateUserWithRoleComponent } from './components/create-user-with-role/create-user-with-role.component';
import { CreateUserWithRoleRadioButtonsComponent } from './components/create-user-with-role-radio-buttons/create-user-with-role-radio-buttons.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
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
import { SortedListComponentModule } from './components/sorted-list/sorted-list.component-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { RefreshEmployeesListComponentModule } from './components/refresh-employees-list/refresh-employees-list.component-module';
import { ProductMasterListComponentModule } from './components/product-master-list/product-master-list.component-module';
import { EmployeesMasterDetailsComponentModule } from './components/employees-master-details/employees-master-details.component-module';
import { CryptoMasterDetailsComponentModule } from './components/crypto-master-details/crypto-master-details.component-module';
import { DetailsTestComponentModule } from './components/details-test/details-test.component-module';
import { DetailsTestServiceModule } from './services/details-test.service-module';
import { DetailsDetailsComponentModule } from './components/details-details/details-details.component-module';
import { AdvancedListComponentModule } from './components/advanced-list/advanced-list.component-module';
import { CategoriesTestServiceModule } from './services/categories-test.service-module';
import { ProductsEmptyStateComponentModule } from './components/products-empty-state/products-empty-state.component-module';
import { CreateUserWithRoleComponentModule } from './components/create-user-with-role/create-user-with-role.component-module';
import { RoleServiceModule } from './services/role.service-module';
import { UserRoleServiceModule } from './services/user-role.service-module';
import { CreateUserWithRoleRadioButtonsComponentModule } from './components/create-user-with-role-radio-buttons/create-user-with-role-radio-buttons.component-module';
import { CreateJobComponentModule } from './components/create-job/create-job.component-module';
import { JobServiceModule } from './services/job.service-module';

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
      { path: 'subject-list', component: FilteredProductListSubjectComponent },
      { path: 'sorting-list', component: SortedListComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'refresh-products', component: ProductListComponent },
      { path: 'refresh-employees', component: RefreshEmployeesListComponent },
      { path: 'products-master-details', component: ProductMasterListComponent },
      { path: 'employees-master-details', component: EmployeesMasterDetailsComponent },
      { path: 'crypto-master-details', component: CryptoMasterDetailsComponent },
      { path: 'test-products', component: DetailsTestComponent },
      { path: 'test-products/:id', component: DetailsDetailsComponent },
      { path: 'advanced-list', component: AdvancedListComponent },
      { path: 'products-empty-state', component: ProductsEmptyStateComponent },
      { path: 'create-user-with-role', component: CreateUserWithRoleComponent },
      { path: 'create-user-with-role-buttons', component: CreateUserWithRoleRadioButtonsComponent },
      { path: 'create-job', component: CreateJobComponent }
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
    FilteredProductListSubjectComponentModule,
    SortedListComponentModule,
    EmployeeListComponentModule,
    RefreshEmployeesListComponentModule,
    ProductMasterListComponentModule,
    EmployeesMasterDetailsComponentModule,
    CryptoMasterDetailsComponentModule,
    DetailsTestComponentModule,
    DetailsTestServiceModule,
    DetailsDetailsComponentModule,
    AdvancedListComponentModule,
    CategoriesTestServiceModule,
    ProductsEmptyStateComponentModule,
    CreateUserWithRoleComponentModule,
    RoleServiceModule,
    UserRoleServiceModule,
    CreateUserWithRoleRadioButtonsComponentModule,
    CreateJobComponentModule,
    JobServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}


//<mat-radio-button *ngFor="let item of roles$| async" [value]="item.id">
//             {{item.role}}
