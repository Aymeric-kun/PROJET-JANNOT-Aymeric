import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { product } from '../../../../shared/model/product';

@Injectable({
  providedIn: 'root'
})
export class ListproductService {

  constructor(private httpclient : HttpClient) { }

  public getProduct() : Observable<product[]> {

    return this.httpclient.get<product[]>(environment.backendProduct);

  }
}
