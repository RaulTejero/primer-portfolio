import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { DATA } from '../db/dbconfig';
import { App } from '../interfaces/app';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

appSelected$ =  new EventEmitter<string>();
appSelect: App;

  constructor(private httpclien: HttpClient) {
  
  }
  getAll(): Promise<App[]> {
    let result = this.httpclien.get<App[]>(DATA + 'apps.json').toPromise();
    return result;
  }

  getAppSelected() {
    let result = this.appSelect
    return result;
  }
  


  
}
