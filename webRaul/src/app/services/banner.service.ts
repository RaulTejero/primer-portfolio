import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DATA} from '../db/dbconfig';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private httpClient: HttpClient) {
   
  }
  getAll(): Promise<any> {
    let result = this.httpClient.get<any>(DATA+"banner.json").toPromise();
    return result
  }
}
