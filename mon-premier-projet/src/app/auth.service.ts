import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:8000/api/login"
  private _registerUrl = "http://localhost:8000/api/register"
  jwt:string;
  username:string;
  roles:string;

  constructor(private http: HttpClient) { }

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
    return this.http.post<{access_token:  string}>(this._registerUrl, user).pipe(tap(res => {
    this.loginUser(user)
    }))
  }

  // loginUser(user) {
  //   return this.http.post<{access_token:  string}>('http://localhost:8000/api/login', {user}).pipe(tap(res => {
  //   localStorage.setItem('access_token', res.access_token);
  //   }))
  //}
}
