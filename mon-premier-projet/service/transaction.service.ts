import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  header = {headers: new HttpHeaders().set("authorization", "Bearer "+ localStorage.getItem('access_token'))};

  private transactionUrl = 'http://127.0.0.1:8000/api/liste_transaction';

  
  getTransaction() {
    return this.http.get<any>(this.transactionUrl,this.header);
  }

}
