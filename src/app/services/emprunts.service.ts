import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  protected basePath = environment.apiUrl;
  REST_API: string = this.basePath + '/emprunts';
  constructor(private http: HttpClient) { }


  get(): Observable<any> {
    return this.http.get(`${this.REST_API}`)
  }

  getByCode(code :any): Observable<any> {
    return this.http.get(`${this.REST_API}/byCode/${code}`)
  }

  getByLivre(id :any): Observable<any> {
    return this.http.get(`${this.REST_API}/byLivre?livreId=${id}`)
  }

  getById(id:any): Observable<any> {
    return this.http.get(`${this.REST_API}/${id}`)
  }

  add(data:any): Observable<any> {
    return this.http.post(`${this.REST_API}` , data)
  }
  addReservation(data:any): Observable<any> {
    return this.http.post(`${this.basePath}/reservations` , data)
  }

  getQRCodeImage(data: any): Observable<Blob> {
    return this.http.get(`${this.REST_API}/qrcode?text=${data}`, { responseType: 'blob' });
  }

  getMyEmprunt(username : any){
    return this.http.get(`${this.REST_API}/byUsername/${username}`)
  }
}
