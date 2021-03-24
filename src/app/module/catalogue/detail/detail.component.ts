import { Component, OnInit } from '@angular/core';
import {ListproductService} from '../listproduct/listproduct.service';
import { product } from '../../../../shared/model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private product: product[];

  constructor(private listProduct : ListproductService,
              private route: ActivatedRoute) {

    this.listProduct.getProduct().subscribe(res => {
      this.product = res;
    });
  }

  ngOnInit(){

  }

}
