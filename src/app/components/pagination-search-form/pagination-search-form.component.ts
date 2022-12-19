import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CryptoChipsService} from '../../services/crypto-chips.service';
import {FormControl, FormGroup} from "@angular/forms";
import {combineLatest, debounceTime, map, Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {CryptoChipsModel} from "../../models/crypto-chips.model";

@Component({
  selector: 'app-pagination-search-form',
  templateUrl: './pagination-search-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationSearchFormComponent {
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];


  readonly search: FormGroup = new FormGroup({title: new FormControl()});
  readonly startWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.title),
    debounceTime(100),
  );

  readonly list$: Observable<CryptoChipsModel[]> = combineLatest([
    this._cryptoChipsService.getAll(),
    this.startWith$
  ]).pipe(
    map(([cryptos, startsWith]) => {
      if (!startsWith) {
        return [];
      }
      return cryptos.filter(crypto => crypto.symbol.startsWith(startsWith))
    })
  );

  constructor(private _cryptoChipsService: CryptoChipsService) {
  }

  ngOnInit(): void {
    this.postList()
  }

  postList(): void {
    this._cryptoChipsService.getAll().subscribe((response) => {
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList()
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }
}
