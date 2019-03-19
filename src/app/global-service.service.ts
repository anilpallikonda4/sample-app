import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './employee';
 //import { Observable } from 'rxjs';
 import { forkJoin } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  private _url: string = "/assets/data/gloabalData.json";
  private _urlone: string = "/assets/data/gloabalDataone.json";
  constructor(private http:HttpClient) {}
 
  // getGlobalData():Observable<Iemployee[]>{
  //   return this.http.get<Iemployee[]>(this._url);
  // }
  getGlobalData(){
    // return this.http.get(this._url);
    return forkJoin(
      this.http.get(this._url),
      this.http.get(this._urlone)
    )    
  }  
}
