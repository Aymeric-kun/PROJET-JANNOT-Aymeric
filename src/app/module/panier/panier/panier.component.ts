import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../../../../shared/model/product';
import { Store } from '@ngxs/store';
import { RemoveCart } from '../../../../shared/actions/panier.action';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  nbArticle: number;
  article: Observable<product[]>;
  isEmpty: boolean;

  constructor(private store: Store) {
    this.store
      .select((state) => state.panier.panier)
      .subscribe((i) => (this.nbArticle = i.length));
    this.store
      .select((state) => state.panier.panier)
      .subscribe((i) => (this.isEmpty = i.length < 1));
    this.article = this.store.select((state) => state.panier.panier);
  }

  ngOnInit(): void {}

  delClick(product) {
    this.removeProduct(product);
  }

  private removeProduct(product) {
    this.store.dispatch(new RemoveCart(product));
  }
}
