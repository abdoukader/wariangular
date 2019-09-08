import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserlisteService {

  private _UserUrl = 'http://127.0.0.1:8000/api/listerUser';
  constructor(private http: HttpClient) { }
  private headers= new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('access_token'));
  getUser():Observable<any>{
    return this.http.get<any>(this._UserUrl, {headers: this.headers});
  }

}

  // monitor(id){

  //   const   _bloquerUser= 'http://localhost:8000/api/bloquer/'+id;
  
  //     return this.http.get(_bloquerUser) 
  //   }

