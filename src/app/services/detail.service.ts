import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

import{Detail} from '../Detail'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private apiUrl = 'http://localhost:5000/details'
  constructor(private http:HttpClient) { }
  getDetails(): Observable<Detail[]>{
    return this.http.get<Detail[]>(this.apiUrl)
  }

  deleteDetail(detail:Detail) : Observable<Detail>{
    const url=`${this.apiUrl}/${detail.id}`;
    return this.http.delete<Detail>(url);
  }
  addDetail(detail: Detail): Observable<Detail> {
    return this.http.post<Detail>(this.apiUrl, detail, httpOptions);
  }
  editDetail(detail:Detail): Observable<Detail> {
    //const indx=this.getDetails.findIndex()
    const url=`${this.apiUrl}/${detail.id}`;
    return this.http.put<Detail>(url, detail, httpOptions); 
  }
  
}
