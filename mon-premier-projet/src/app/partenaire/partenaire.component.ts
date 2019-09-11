import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeService } from '../liste.service';
import { AjoutPartenaireService } from '../ajout-partenaire.service';
import { AuthService } from '../auth.service';
import { PartenaireService } from '../partenaire.service';
import { Partenaire } from './model/partenaire';


@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  partenaire = [];

  imageUrl: string = "/assets/wari.jpeg";
  fileToUpload: File = null;

  constructor(private bs: PartenaireService,private _auth1: ListeService,private _auth: AuthService, private ajoutPartService: AjoutPartenaireService ,private _router: Router) { }

  ngOnInit() {
     
    this.bs.getPartenaire()
    .subscribe((res:Partenaire[]) =>  {
        this.partenaire = res
        console.log(res)
      },
      err => console.log(err)
    );
  }
  registerPartenaire(){
    this._auth.registerPartenaire(this.ajoutPartService)
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
    this.ajoutPartService.postFile1(
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
