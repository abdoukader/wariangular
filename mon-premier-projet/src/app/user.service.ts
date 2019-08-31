import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private _UserUrl = 'http://127.0.0.1:8000/api/users/15';
  // constructor(private http: HttpClient) { }
  // private headers= new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('access_token'));
  // getUser():Observable<any[]>{
  //   return this.http.get<any>(this._UserUrl, {headers: this.headers});
  // }


  constructor(private http: HttpClient) { }
  headers = {headers: new HttpHeaders().set("authorization", "Bearer "+ localStorage.getItem('access_token'))};
  
  postFile(
      username:string,
      password:string,
      nom:string,
      prenom:string,
      mail:string,
      adresse:string,
      statut:string,
      ninea:string,
      profil:string,
      imageName:File,
      tel:string
  ) {
    const endpoint = 'http://127.0.0.1:8000/api/register';
    const formData: FormData = new FormData();


    formData.append('username', username);
    formData.append('password', password);
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('mail', mail);
    formData.append('adresse', adresse);
    formData.append('statut', statut);
    formData.append('ninea', ninea);
    formData.append('profil', profil);
    formData.append('imageName', imageName, imageName.name);
    formData.append('tel', tel)
    return this.http.post(endpoint, formData,this.headers);
  }
}
