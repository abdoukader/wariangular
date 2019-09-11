import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvoieService} from 'service/envoie.service';


@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.scss']
})
export class EnvoieComponent implements OnInit {
  envoie = [];
  
  constructor(private envoi: EnvoieService,private envoyerE:EnvoieService, private router: Router) { }

  ngOnInit() {
  
  }

  envoyer(){
    this.envoi.envoyer(this.envoyerE)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('access_token', res.jwt)
          this.router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }
  OnSubmit(nomE,prenomE,telE,nomR,prenomR,telR,montant){
    this.envoyerE.postEnvoi(
      nomE.value,
      prenomE.value,
      telE.value,
      nomR.value,
      prenomR.value,
      telR.value,
      montant.value
    ).subscribe(
      data=>{
        console.log(data);
        nomE.value = null;
        prenomE.value = null;
        telE.value = null;
        nomR.value = null;
        prenomR.value = null;
        telR.value = null;
        montant.value = null;
      }
    )
  }

}
