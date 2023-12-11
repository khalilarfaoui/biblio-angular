import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livres } from '../models/Livres';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  protected basePath = environment.apiUrl;
  REST_API: string = this.basePath + '/livres';
  constructor(private http : HttpClient) { }

  get(page: number, pageSize: number):Observable<any>{
   
    return this.http.get(`${this.REST_API}?page=${page}&size=${pageSize}` ) 
  }
}
