import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //cheminImage:any = "/home/thiam/Images/ka.png";
  registerUserData = {}

  imageUrl: string = "/assets/wari.jpeg";
  fileToUpload: File = null;

  constructor(private _auth: AuthService,private userService: UserService,
    private _router: Router) { }

  ngOnInit() {
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('access_token', res.jwt)
          this._router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(username,password,nom,prenom,mail,adresse,statut,ninea,profil,imageName,tel){
    this.userService.postFile(
      username.value,
      password.value,
      nom.value,
      prenom.value,
      mail.value,
      adresse.value,
      statut.value,
      ninea.value,
      profil.value,
      this.fileToUpload,
      tel.value 
    ).subscribe(
      data =>{
      console.log(data);
      username.value = null;
      password.value = null;
      nom.value = null;
      prenom.value = null;
      mail.value = null;
      adresse.value = null;
      statut.value = null;
      ninea.value = null;
      profil.value = null;
      imageName.value = null;
      tel.value = null;
        this.imageUrl = "/assets/wari.jpeg";
      }
    );
   }

}
