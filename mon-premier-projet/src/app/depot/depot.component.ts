import { Component, OnInit } from '@angular/core';
import { DepotService } from 'service/depot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
log = {numcompte:null,somme:null};
  constructor(private _auth: DepotService,private deposer:DepotService,private _router: Router) { }

  ngOnInit() {
  }

  OnSubmit(){
    this._auth.depot(this.log)
      .subscribe(
        res => {
          console.log(res)
        //  localStorage.setItem('access_token', res.jwt)
          this._router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }
}
