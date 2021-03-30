import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListproductComponent } from './listproduct/listproduct.component'
import { FilterproductComponent} from './filterproduct/filterproduct.component'
import {FormsModule} from '@angular/forms';


const appRoutes : Routes = [
  {
    path: '',
    component: ListproductComponent
  },
  {
    path: 'detail/:id',
    loadChildren : () => import ('./detail/detail-product/detail-product.module').then((i) => i.DetailProductModule)
  }
]

@NgModule({
  declarations: [
    ListproductComponent,
    FilterproductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})

export class CatalogueModule { }
