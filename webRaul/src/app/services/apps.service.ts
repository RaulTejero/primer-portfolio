import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATA } from '../db/dbconfig';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private httpclien: HttpClient) {
  
  }
  getAll(): Promise<any> {
    let result = this.httpclien.get<any>(DATA + 'apps.json').toPromise();
    return result;
  }
}
