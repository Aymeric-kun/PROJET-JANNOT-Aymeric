import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpclient : HttpClient) { }

  public getProduct() : Observable<product[]> {

    return this.httpclient.get<product[]>(environment.backendProduct);

  }
}
