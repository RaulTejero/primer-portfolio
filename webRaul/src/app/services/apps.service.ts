import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATA } from '../db/dbconfig';
import { Apps } from '../interfaces/apps';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private httpclien: HttpClient) {
  
  }
  getAll(): Promise<Apps[]> {
    let result = this.httpclien.get<Apps[]>(DATA + 'apps.json').toPromise();
    return result;
  }
}
