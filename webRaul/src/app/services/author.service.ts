import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { DATA } from '../db/dbconfig';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {


  constructor(private HttpClient: HttpClient) {
  
   }
   getName(): Promise<any> {
     let result = this.HttpClient.get<any>(DATA+"author/name.json").toPromise();
     return result; 
   }
   getRoll(): Promise<any> {
    let result = this.HttpClient.get<any>(DATA+"author/roll.json").toPromise();
    return result; 
  }
  getContact(): Promise<any> {
    let result = this.HttpClient.get<any>(DATA+"author/contact.json").toPromise();
    return result; 
  }
  getSocial(): Promise<any> {
    let result = this.HttpClient.get<any>(DATA+"author/social.json").toPromise();
    return result; 
  }
  getPhoto(): Promise<any> {
    let result = this.HttpClient.get<any>(DATA+"author/photo.json").toPromise();
    return result; 
  }
  getCV(): Promise<any> {
    let result = this.HttpClient.get<any>(DATA+"author/cv.json").toPromise();
    return result; 
  }

}
