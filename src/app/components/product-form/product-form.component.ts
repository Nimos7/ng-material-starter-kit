import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productsForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl()
  });

  constructor(private _productService: ProductService) {
  }

  onProductsFormSubmitted(productsForm: FormGroup): void {
    this._productService.create({
      title:productsForm.get('title')?.value,
      category:productsForm.get('category')?.value,
      description:productsForm.get('description')?.value,
      price:productsForm.get('price')?.value,
      image:productsForm.get('image')?.value
    }).subscribe();
  }
}
