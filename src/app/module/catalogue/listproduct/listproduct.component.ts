import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../../../shared/model/product';
import { ListproductService } from './listproduct.service';
import { Store } from '@ngxs/store';
import { AddCart } from '../../../../shared/actions/panier.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
})
export class ListproductComponent implements OnInit {
  Product$: Observable<product[]>;

  public product: product[] = [];
  public productFilter: product[] = [];
  public isEmpty: boolean = false;

  @Input() filter: String;

  constructor(public listProduct: ListproductService, private store: Store) {}

  addCart(id, name, picture, price, info, detail) {
    this.store.dispatch(
      new AddCart({
        id: id,
        name: name,
        detail: detail,
        info: info,
        picture: picture,
        price: price,
      })
    );
  }

  ngOnInit() {
    this.listProduct.getProduct().subscribe((res) => {
      this.product = res;
      this.productFilter = res;
      console.log(this.product);
    });
  }

  search(filter: string) {
    this.filter = filter;
    this.isEmpty = false;
    this.productFilter = [];

    if (this.filter === '') {
      this.productFilter = this.product;
      return;
    }

    for (let i = 0; i < this.product.length; i++) {
      if (
        this.product[i].name
          .toLowerCase()
          .includes(this.filter.toLowerCase().trim())
      ) {
        this.productFilter.push(this.product[i]);
      }
    }

    if (this.productFilter.length == 0) {
      this.isEmpty = true;
    }
  }
}
