import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DepotService {

  
  constructor(private http: HttpClient) { }
  header = {headers: new HttpHeaders().set("authorization", "Bearer "+ localStorage.getItem('access_token'))};

  depot(user){
    const endpoint = 'http://127.0.0.1:8000/api/depot';
    //const formData: FormData = new FormData();
    
    // formData.append('somme',depot.somme)
    // formData.append('numcompte', depot.numcompte);

    return this.http.post(endpoint, user,this.header);

  }
  
}
