import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { DATA } from '../db/dbconfig';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private HttpClient: HttpClient) {

   }
   getAll(): Promise<any> {
     let result = this.HttpClient.get<any>(DATA+"author.json").toPromise();
     return result;
   }

}
