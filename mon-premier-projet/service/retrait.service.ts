import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {

  private _loginUrl = "http://localhost:8000/api/login"
  private retraitUrl = "http://127.0.0.1:8000/api/retrait"

  headers: HttpHeaders | { [header: string]: string | string[]; };
  constructor(private http: HttpClient) { }
  header = {headers: new HttpHeaders().set("authorization", "Bearer "+ localStorage.getItem('access_token'))};

  postRetirer(
    cni:string,
    code:string
    ) {
      const endpoint = 'http://127.0.0.1:8000/api/retrait';
      const formData: FormData = new FormData();

      formData.append('cni',cni);
      formData.append('code',code)
      
    return this.http.post(endpoint, formData,this.header);

    }

    loginUser(user){
      return this.http.post<any>(this._loginUrl, user).pipe(tap(res => {}))
    }
  
    retirer(user) {
      return this.http.post<{jwt:  string}>(this.retraitUrl, user,{headers:this.headers}).pipe(tap(res => {
      this.loginUser(user)
      }))
    }
}
