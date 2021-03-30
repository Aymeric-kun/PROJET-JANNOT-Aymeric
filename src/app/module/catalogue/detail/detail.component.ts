import { Component, OnInit } from '@angular/core';
import { ListproductService } from '../listproduct/listproduct.service';
import { product } from '../../../../shared/model/product';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddCart } from '../../../../shared/actions/panier.action';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public productSelected: product;
  id: string = '';
  name: string = '';
  detail: string = '';
  price: string = '';
  info: string = '';
  picture: string = '';

  constructor(
    private listProduct: ListproductService,
    private route: ActivatedRoute,
    private store: Store
  ) {
    let id = this.route.snapshot.paramMap.get('id');

    this.listProduct.getProduct().subscribe((res) => {
      this.productSelected = res.find((i) => i.id === id);
    });
  }

  ngOnInit() {}

  addClick(id, name, price, detail, info, picture) {
    this.addProduct(id, name, price, detail, info, picture);
  }

  private addProduct(id, name, price, detail, info, picture) {
    this.store.dispatch(
      new AddCart({ id, name, price, detail, info, picture })
    );
  }
}
