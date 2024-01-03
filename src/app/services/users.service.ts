import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected basePath = environment.apiUrl;
  REST_API: string = this.basePath + '/users';
  constructor(private http: HttpClient) { }


  get(): Observable<any> {
    return this.http.get(`${this.REST_API}`)
  }


  delete(id:any): Observable<any> {
    return this.http.delete(`${this.REST_API}/${id}`)
  }





  add(data: any): Observable<any> {
    return this.http.post(`${this.REST_API}`, data)
  }

  edit(data: any): Observable<any> {
    return this.http.put(`${this.REST_API}/${data.idLivre}`, data)
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${this.REST_API}/${id}`)
  }

}
