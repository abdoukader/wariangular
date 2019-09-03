import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutPartenaireService {
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
