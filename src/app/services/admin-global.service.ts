import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminGlobalService {

  constructor(private httpClient: HttpClient) { }

  public getAllUser() {
    return this.httpClient.get(`${baseUrl}/admin/fetchAllUser`);
  }

}
