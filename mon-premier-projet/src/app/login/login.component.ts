import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          this._auth.saveToken(res.token);
          
          console.log(res.token)
          if (this.isSuperAdmin()){
            Swal.fire('bienvenue sur la plate forme de TIAK TIAK WARI !!!')
          this.router.navigate(['/partenaire'])
          }
          else if (this.isCaissier()){
            Swal.fire('bienvenue caissier !!!')
            this.router.navigate(['/depot'])
          }
          else if (this.isUser()){
            Swal.fire('effectuez une transaction')
            this.router.navigate(['/transaction'])
          }
          else if (this.isAdmin()){
            Swal.fire('bienvenue admin')
            this.router.navigate(['/register'])
          } 
        },

        //err => console.log(err)
      )
  }
  isAdminPartenaire() {
    throw new Error("Method not implemented.");
  }

  isSuperAdmin() {
    return this._auth.isSuperAdmin();
  }

  isAdmin() {
    return this._auth.isAdmin();
  }

  isUser() {
    return this._auth.isUser();
  }

  isCaissier() {
    return this._auth.isCaissier();
  }

}
