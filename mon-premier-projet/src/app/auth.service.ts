import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private _loginUrl = "http://localhost:8000/api/login"
  private _registerUrl = "http://localhost:8000/api/register"
  private _partenaireUrl = "http://localhost:8000/api/partenaires"

  jwt:string;
  username:string;
  roles:string;
  headers: HttpHeaders | { [header: string]: string | string[]; };

  constructor(private http: HttpClient, private _router: Router) { }

  // registerUser(user){
  //   return this.http.post<any>(this._registerUrl, user)
  // }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user).pipe(tap(res => {
     //  localStorage.setItem('access_token', res.access_token);
       
    }))
  }
  
  saveToken(jwt:string){
    localStorage.setItem('access_token', jwt);
    this.jwt=jwt;
    this.parseJWT();
  }
  
    parseJWT(){
      let jwtHelper= new JwtHelperService(); 
      let objJWT=jwtHelper.decodeToken(this.jwt);
      this.username=objJWT.username;
      this.roles=objJWT.roles;
      console.log(this.roles)
      console.log(this.username)
    }
    
    isSuperAdmin(){
      return this.roles.indexOf('SUPER_ADMIN]')>=0;
    }

    isAdmin(){
      return this.roles.indexOf('ADMIN')>=0;
    }
    isUser(){
      return this.roles.indexOf('USER')>=0;
    }
    isCaissier(){
      return this.roles.indexOf('CAISSIER')>=0;
    }
    isAuthentification(){
      return this.roles && (this.isAdmin() || this.isUser() || this.isSuperAdmin() || this.isCaissier())
    }
  
  registerUser(user) {
    return this.http.post<{jwt:  string}>(this._registerUrl, user,{headers:this.headers}).pipe(tap(res => {
    this.loginUser(user)
    }))
  }

  registerPartenaire(user) {
    return this.http.post<{jwt:  string}>(this._partenaireUrl, user,{headers:this.headers}).pipe(tap(res => {
    this.loginUser(user)
    }))
  }

  logout() {
    localStorage.removeItem('access_token');
    this._router.navigate(['/login'])

  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

  // loginUser(user) {
  //   return this.http.post<{access_token:  string}>('http://localhost:8000/api/login', {user}).pipe(tap(res => {
  //   localStorage.setItem('access_token', res.access_token);
  //   }))
  //}
}
