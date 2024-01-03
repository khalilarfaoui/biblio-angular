import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected basePath = environment.apiUrl;
  REST_API: string = this.basePath;
  constructor(private http: HttpClient) { }

  login(data : any):Observable<any>{
    return this.http.post<any>(`${this.REST_API}/auth` , data)
  }

  register(data : any):Observable<any>{
    return this.http.post<any>(`${this.REST_API}/auth/register` , data)
  }

  me():Observable<any>{
    return this.http.get<any>(`${this.REST_API}/users/user`)
  }

  userByUserName(username : any):Observable<any>{
    return this.http.get<any>(`${this.REST_API}/users/${username}`)
  }

  


}
