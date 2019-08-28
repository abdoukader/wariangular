import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-projet';

  constructor(private _auth:AuthService ){}


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
    return this._auth.isCaissier();
  }
}
