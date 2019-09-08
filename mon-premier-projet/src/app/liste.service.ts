import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  private _PartenaireUrl = 'http://127.0.0.1:8000/api/partenaire/7';
  constructor(private http: HttpClient) { }
  private headers= new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('access_token'));
  getPartenaire():Observable<any>{
    return this.http.get<any>(this._PartenaireUrl, {headers: this.headers});
  }
}
