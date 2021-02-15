import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATA } from '../db/dbconfig';
import { App } from '../interfaces/app';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private httpclien: HttpClient) {
  
  }
  getAll(): Promise<App[]> {
    let result = this.httpclien.get<App[]>(DATA + 'apps.json').toPromise();
    return result;
  }
}
