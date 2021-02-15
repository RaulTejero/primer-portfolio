import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { DATA } from '../db/dbconfig';
import { Technologies } from '../interfaces/technologies';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private HttpClient: HttpClient) {

   }
   getAll(): Promise<Technologies[]> {
     let result = this.HttpClient.get<Technologies[]>(DATA+"technologies.json").toPromise();
     return result;
   }

}
