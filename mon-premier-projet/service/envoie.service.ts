import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {

  private _loginUrl = "http://localhost:8000/api/login"
  private envoieUrl = "http://localhost:8000/api/envoie"

  headers: HttpHeaders | { [header: string]: string | string[]; };
  constructor(private http: HttpClient) { }
  header = {headers: new HttpHeaders().set("authorization", "Bearer "+ localStorage.getItem('access_token'))};

  postEnvoi(
  nomE:string,
  prenomE:string,
  telE:string,
  nomR:string,
  prenomR:string,
  telR: string,
  montant:string
  ) {
    const endpoint = 'http://127.0.0.1:8000/api/envoie';
    const formData: FormData = new FormData();

    formData.append('nomE',nomE);
    formData.append('prenomE',prenomE);
    formData.append('telE',telE)
    formData.append('nomR',nomR);
    formData.append('prenomR',prenomR);
    formData.append('telR',telR);
    formData.append('montant',montant)

    return this.http.post(endpoint, formData,this.header);
  }


  loginUser(user){
    return this.http.post<any>(this._loginUrl, user).pipe(tap(res => {}))
  }

  envoyer(user) {
    return this.http.post<{jwt:  string}>(this.envoieUrl, user,{headers:this.headers}).pipe(tap(res => {
    this.loginUser(user)
    }))
  }
}
