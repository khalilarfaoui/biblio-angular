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
  constructor(private http: HttpClient) { }


  get(): Observable<any> {
    return this.http.get(`${this.REST_API}`)
  }


  delete(id:any): Observable<any> {
    return this.http.delete(`${this.REST_API}/${id}`)
  }

  countLibreByGenre(): Observable<any> {
    return this.http.get(`${this.REST_API}/countByGenre`)
  }
  countLibreByFormat(): Observable<any> {
    return this.http.get(`${this.REST_API}/countByFormat`)
  }





  add(data: any): Observable<any> {
    return this.http.post(`${this.REST_API}`, data)
  }

  edit(data: any): Observable<any> {
    return this.http.put(`${this.REST_API}/${data.idLivre}`, data)
  }

  getLivreNonEmprunte(): Observable<any> {
    return this.http.get(`${this.REST_API}/sans-emprunt-et-reservation`)
  }

  getLivreEmprunte(): Observable<any> {
    return this.http.get(`${this.REST_API}/avec-emprunt-sans-reservation`)
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${this.REST_API}/${id}`)
  }

  getFormatLivre() {
    return this.http.get(`${this.REST_API}/retrieve-all-formatLivre`)
  }

  getGenreLivre() {
    return this.http.get(`${this.REST_API}/retrieve-all-genreLivre`)
  }

  getPublicCible() {
    return this.http.get(`${this.REST_API}/retrieve-all-publicCible`)
  }

  filteredLivre(formatLivre: any, publicCible: any, genreLivre: any) {
    const f = formatLivre ? `${formatLivre}` : ''
    const p = publicCible ? `${publicCible}` : ''
    const g = genreLivre ? `${genreLivre}` : ''
    return this.http.get(`${this.REST_API}/byParams?formatLivre=${f}&publicCible=${p}&genreLivre=${g}`)
  }
}
