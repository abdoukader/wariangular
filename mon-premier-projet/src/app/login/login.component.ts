import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService, private router:Router) { }

  ngOnInit() {
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res.token)
        //localStorage.setItem('access_token',res.access_token)
      this._auth.saveToken(res.token);
        },

        //err => console.log(err)
      )
  }

  isSuperAdmin(){
    return this._auth.isSuperAdmin();
  }

  isAdmin(){
    return this._auth.isAdmin();
  }

  isUser(){
    return this._auth.isUser();
  }

  isCaissier(){
    return this._auth.isUser();
  }

}
