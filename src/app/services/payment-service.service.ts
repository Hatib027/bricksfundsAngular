import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private httpClient: HttpClient) { }


  public addProduct(payment: any) {

    console.log("sj");

    return this.httpClient.post(`${baseUrl}/payment/addpayment`, payment);
  }

  public getBanks() {
    return this.httpClient.get(`${baseUrl}/payment/getAllBank`);
  }
}
